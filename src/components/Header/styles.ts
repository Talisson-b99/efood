import styled from "styled-components";
import { Cores } from "../../styles";

export const ImageBackground = styled.div`
  height: 384px;
`

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 64px;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${Cores.laranjaEscuro};
  max-width: 540px;
  margin-top: 138px;
  text-align: center;
`