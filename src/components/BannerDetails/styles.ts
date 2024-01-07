import styled from "styled-components";
import { Cores } from "../../styles";

export const Header = styled.div`
  div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 65px;
  font-size: 18px;
  font-weight: 900;
  color: ${Cores.laranjaEscuro};
} 
`

export const BannerImage = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${Cores.branco};
  font-size: 32px;
  padding-block: 24px 32px;

  h4 {
    font-weight: 100;
  }

  h2 {
    font-size: 900;
    margin-top: 152px;
    
  }
`