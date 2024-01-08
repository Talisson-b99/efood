import styled from "styled-components";
import { Cores } from "../../styles";

export const Card = styled.div`
  background-color: ${Cores.laranjaEscuro};
  padding: 8px;
  width: 320px;
  height: 338px;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 167px;
  }
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
  text-align: justify;

`

export const Button = styled.button`
  background-color: ${Cores.samao};
  color: ${Cores.laranjaEscuro};
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  padding: 4px;
  border: none;
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  
`