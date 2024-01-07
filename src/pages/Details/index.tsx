import BannerDetails from "../../components/BannerDetails";
import CardItem from "../../components/CardItem";
import { SectionItems } from "./styles";

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
    </div>
  );
};

export default Details;
