import BannerDetails from "../../components/BannerDetails";
import CardItem from "../../components/CardItem";
import { ModalContent, SectionItems, SectionModal } from "./styles";

import close from "../../assets/close.png";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetRestaurantesDetailsQuery } from "../../services/api";
import { useDispatch } from "react-redux";
import { add, open } from "../../store/reducers/cart";
import { CardapioItem } from "../../types/restaurant";

export type PratoProps = {
  id: number;
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
};

const Details = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { data: restaurate } = useGetRestaurantesDetailsQuery(id!);

  const [isModalActive, setIsModalActive] = useState(false);

  const [prato, setPrato] = useState<CardapioItem>();

  const getPrato = (id: number) => {
    const prato = restaurate?.cardapio.filter((item) => item.id === id);
    setPrato(prato![0]);
  };

  const handleAddToCart = (item: CardapioItem) => {
    dispatch(add(item));
    dispatch(open());
  };

  if (!restaurate) {
    return null;
  }

  return (
    <div>
      <BannerDetails restaurant={restaurate} />
      <SectionItems className="container">
        {restaurate?.cardapio.map((prato) => (
          <CardItem
            key={prato.id}
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
            <button onClick={() => handleAddToCart(prato!)}>
              Adicionar ao carrinho - R$ {prato?.preco}
            </button>
          </div>
        </ModalContent>
      </SectionModal>
    </div>
  );
};

export default Details;
