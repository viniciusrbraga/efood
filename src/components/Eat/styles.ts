import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.coral};
  border: 8px solid ${cores.coral};
  position: relative;
  margin-bottom: 40px;

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    height: 167px;
    width: 100%;
    object-fit: cover;
  }
`

export const Nome = styled.h3`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
  color: ${cores.creme};
`

export const Descricao = styled.p`
  color: ${cores.creme};
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
  // padding: 6px;
`

export const Botao = styled.button`
  background-color: ${cores.bege};
  color: ${cores.coral};
  position: relative;
  width: 100%;
  height: 24px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }

  .CloseModal {
    max-width: 16px;
    max-height: 16px;
    cursor: pointer;
    margin-right: -24px;
    margin-top: -24px;
  }
`

export const ModalContent = styled.div`
  width: 1024px;
  height: 344px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 32px;
  margin-bottom: 24px;
  color: ${cores.bege};
  background-color: ${cores.coral};

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  img {
    width: 100%;
    margin-right: 24px;
    width: 280px;
    height: 280px;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
  }
`

export const DescricaoContainer = styled.div`
  display: block;

  p {
    font-size: 14px;

    margin-bottom: 16px;
  }
`
export const DadosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    bottom: 0;
    width: 218px;
    height: 24px;
  }
`
