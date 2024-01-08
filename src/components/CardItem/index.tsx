import { Button, Card, Description, Title } from "./styles";

type Props = {
  onclick?: () => void;
  prato: {
    id: number;
    foto: string;
    preco: number;
    nome: string;
    descricao: string;
    porcao: string;
  };
};

const CardItem = ({ onclick, prato }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 138) {
      return descricao.slice(0, 135) + "...";
    }
    return descricao;
  };

  return (
    <Card onClick={onclick}>
      <img src={prato.foto} alt="Pizza" />
      <Title>{prato.nome}</Title>
      <Description>{getDescricao(prato.descricao)}</Description>
      <Button>Adicionar ao carrinho</Button>
    </Card>
  );
};

export default CardItem;
