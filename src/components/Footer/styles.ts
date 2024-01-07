import styled from "styled-components";
import { Cores } from "../../styles";

export const Container = styled.div`
  background-color: ${Cores.samao};
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 125px;
    height: 60px;
    margin-top: 40px;
    margin-bottom: 32px;
  }
`

export const Links = styled.ul`
  display: flex;
`

export const Link = styled.li`
  width: 24px;
  height: 24px;
  background-color: ${Cores.laranjaEscuro};
  margin-right: 8px;
  position: relative;
 
  border-radius: 50%;

  a {
    text-decoration: none;
  }

  svg {
    color: ${Cores.samao};
    font-size: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  
  }
`

export const Description = styled.p`
  font-size: 10px;
  color: ${Cores.laranjaEscuro};
  width: 480px;
  text-align: center;
  font-weight: 400;
  margin-top: 80px;
  margin-bottom: 40px;
  ;

`