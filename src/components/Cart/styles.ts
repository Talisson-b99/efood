import styled from "styled-components";
import { Cores } from "../../styles";

export const CartContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  
`

export const SideBar = styled.aside`
  background-color: ${Cores.laranjaEscuro};
  width: 360px;
  height: 100%;
  z-index: 99;
  padding: 32px 8px 0 8px;

  button {
    width: 100%;
    margin-top: 16px;
    color: ${Cores.laranjaEscuro};
    background-color: ${Cores.samao};
    font-weight: bold;
    font-size: 14px;
    padding: 4px;
    border: none;
 
  }
`

export const CartItem = styled.li`
  display: flex;
  gap: 8px;
  background-color: ${Cores.samao};
  padding: 8px;
  color: ${Cores.laranjaEscuro};
  position: relative;
  margin-block: 16px;
  

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;   
    font-weight: 900;
  }

  p {
    font-size: 14px;
    margin-top: 16px;
  }
`

export const ContainerTrash = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
`

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  span {
    font-size: 14px;
    color: ${Cores.samao};
    font-weight: bold;
  }
`