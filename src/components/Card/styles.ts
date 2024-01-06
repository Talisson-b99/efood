import styled from "styled-components";
import { Cores } from "../../styles";

export const ContainerCard = styled.div`
  max-width: 472px;
  font-size: 18px;
  font-weight: bold;
  color: ${Cores.laranjaEscuro};
  border: 1px solid ${Cores.laranjaEscuro};
`

export const Title = styled.h3`  
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
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