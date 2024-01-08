import styled from "styled-components";
import { Cores } from "../../styles";

import { Link } from "react-router-dom";

export const ContainerCard = styled(Link)`
  max-width: 472px;
  font-size: 18px;
  font-weight: bold;
  color: ${Cores.laranjaEscuro};
  border: 1px solid ${Cores.laranjaEscuro};
  text-decoration: none;

  img {
    width: 100%;
    max-height: 217px;
    display: block;
    object-fit: cover;
  }
`

export const Title = styled.h3`  
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;

  >div {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      width: 21px;
      height: 21px;
    }
  }
`

export const Content = styled.div`
  padding: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  margin-top: 16px;
`

export const Button = styled.button`
  color: ${Cores.samao};
  background-color: ${Cores.laranjaEscuro};
  padding: 4px 6px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  margin-top: 20px;

`