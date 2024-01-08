import BannerDetails from "../../components/BannerDetails";
import CardItem from "../../components/CardItem";
import { ModalContent, SectionItems, SectionModal } from "./styles";

import item1 from "../../assets/cardItem1.png";
import close from "../../assets/close.png";

const Details = () => {
  return (
    <div>
      <BannerDetails />
      <SectionItems className="container">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </SectionItems>
      <SectionModal>
        <ModalContent>
          <img src={item1} />
          <div>
            <img src={close} />
            <h3>Nome do prato</h3>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </p>
            <p>Serve de 2 a 3 pessoas</p>
            <button>Adicionar ao carrinho - R$ 80,90</button>
          </div>
        </ModalContent>
      </SectionModal>
    </div>
  );
};

export default Details;
