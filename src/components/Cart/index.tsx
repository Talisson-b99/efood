import {
  CartContainer,
  CartItem,
  ContainerPrice,
  ContainerTrash,
  Overlay,
  SideBar,
} from "./styles";

import { FaRegTrashAlt } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/cart";
import { formataPreco } from "../../utils/formatPreco";
import { CardapioItem } from "../../types/restaurant";

const Cart = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootReducer) => state.cart.isOpen);
  const items = useSelector((state: RootReducer) => state.cart.items);

  const getPriceTotal = items.reduce((acc, curr) => (acc += curr.preco), 0);

  const handleCloseCart = () => {
    dispatch(close());
  };

  const handleRemoveItem = (item: CardapioItem) => {
    dispatch(remove(item));
  };
  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={handleCloseCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
              </div>
              <ContainerTrash>
                <FaRegTrashAlt
                  onClick={() => handleRemoveItem(item)}
                  size={16}
                />
              </ContainerTrash>
            </CartItem>
          ))}
        </ul>
        <ContainerPrice>
          <span>Valor total</span>
          <span>{formataPreco(getPriceTotal)}</span>
        </ContainerPrice>
        <button>Continuar com a entrega</button>
      </SideBar>
    </CartContainer>
  );
};

export default Cart;
