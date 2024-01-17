import styled from "styled-components";
import { Cores } from "../../styles";

export const SectionItems = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding-block: 56px 120px;
`

export const SectionModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  align-items: center;
  justify-content: center;

  &.modalActive{
    display: flex;
  }

  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    content: '';
  }
  `

export const ModalContent = styled.div`
  width: 1024px;
  height: 344px;
  background-color: ${Cores.laranjaEscuro};
  position: relative;
  z-index: 1;
  color: ${Cores.branco};
  padding: 32px;


  display: flex;
  gap: 24px;

  >img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    cursor: pointer;

  }

  >div {
    >img {
      position: absolute;
      right: 16px;
      top: 16px;
    }
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  p{
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
  }

  button {
    background-color: ${Cores.samao};
    color: ${Cores.laranjaEscuro};
    font-size: 14px;
    font-weight: bold;
    margin-top: 20px;
    border: none;
    padding: 4px 6px;
   }

`