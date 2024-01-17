import { BannerImage, Header } from "./styles";

import Logo from "../../assets/logo.png";
import Background from "../../assets/fundo.png";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../store/reducers/cart";
import { RestaurantProps } from "../../types/restaurant";
import { RootReducer } from "../../store";

type Props = {
  restaurant: RestaurantProps;
};

const BannerDetails = ({ restaurant }: Props) => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootReducer) => state.cart.items);

  const handleOpenToCart = () => {
    dispatch(open());
  };
  return (
    <div>
      <Header style={{ backgroundImage: `url(${Background})` }}>
        <div className="container">
          <h3>Restaurantes</h3>
          <img src={Logo} alt="efood" />
          <p onClick={handleOpenToCart} style={{ cursor: "pointer" }}>
            {items.length} produto(s) no carrinho
          </p>
        </div>
      </Header>
      <BannerImage style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <div className="container">
          <h4>{restaurant.tipo}</h4>
          <h2>{restaurant.titulo}</h2>
        </div>
      </BannerImage>
    </div>
  );
};

export default BannerDetails;
