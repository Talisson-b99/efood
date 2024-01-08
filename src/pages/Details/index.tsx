import BannerDetails from "../../components/BannerDetails";
import CardItem from "../../components/CardItem";
import { ModalContent, SectionItems, SectionModal } from "./styles";

import close from "../../assets/close.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export type CardapioProps = {
  id: number;
  capa: string;
  tipo: string;
  titulo: string;
  cardapio: {
    id: number;
    foto: string;
    preco: number;
    nome: string;
    descricao: string;
    porcao: string;
  }[];
};

export type PratoProps = {
  id: number;
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
};

const Details = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [cardapio, setCardapio] = useState<CardapioProps>();
  const [prato, setPrato] = useState<PratoProps>();

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((response) => setCardapio(response));
  }, [id]);

  console.log(cardapio);

  const getPrato = (id: number) => {
    setPrato(cardapio?.cardapio[id - 1]);
  };

  if (!cardapio) {
    return null;
  }

  return (
    <div>
      <BannerDetails restaurant={cardapio} />
      <SectionItems className="container">
        {cardapio?.cardapio.map((prato) => (
          <CardItem
            onclick={() => {
              setIsModalActive(true), getPrato(prato.id);
            }}
            prato={prato}
          />
        ))}
      </SectionItems>
      <SectionModal className={isModalActive ? "modalActive" : ""}>
        <ModalContent>
          <img src={prato?.foto} />
          <div>
            <img src={close} onClick={() => setIsModalActive(false)} />
            <h3>{prato?.nome}</h3>
            <p>{prato?.descricao}</p>
            <p>Serve de {prato?.porcao}</p>
            <button>Adicionar ao carrinho - R$ {prato?.preco}</button>
          </div>
        </ModalContent>
      </SectionModal>
    </div>
  );
};

export default Details;
