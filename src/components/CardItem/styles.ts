import styled from "styled-components";
import { Cores } from "../../styles";

export const Card = styled.div`
  background-color: ${Cores.laranjaEscuro};
  padding: 8px;
  width: 320px;
  height: 338px;
`

export const Title = styled.h4`
  font-size: 16px;
  font-family: 900;
  color: ${Cores.samao};
  margin-block: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${Cores.samao};

`

export const Button = styled.button`
  background-color: ${Cores.samao};
  color: ${Cores.laranjaEscuro};
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  padding: 4px;
  border: none;
`