import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

import lixeira from '../../assets/images/lixeira.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  background-color: ${cores.preto};
  opacity: 0.99;
`

export const Sidebar = styled.aside`
  background-color: ${cores.coral};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  h2 {
    color: ${cores.bege};
    font-size: 16px;
    font-weight: 700;
    margin-left: 4px;
    margin-top: 32px;
    margin-bottom: 16px;
  }

  label {
    color: ${cores.bege};
    font-size: 14px;
    font-weight: 700;
    margin-left: 4px;
    margin-bottom: 8px;
    display: block;

    &.cvv {
      width: 87px;
      margin-left: 66px;
    }
  }

  input {
    margin-bottom: 8px;
    background-color: ${cores.bege};
    border: 1px solid ${cores.bege};
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &.cartao {
      width: 208px;
    }

    &.cvv {
      width: 87px;
      margin-left: 66px;
    }

    &.error {
      border: 3px solid ${cores.vinho};
    }
  }

  p {
    color: ${cores.bege};
    font-size: 14px;
    font-weight: 400;
    margin-left: 4px;
    margin-top: 32px;
    margin-bottom: 16px;
  }

  button {
    background-color: ${cores.bege};
    border: 1px solid ${cores.bege};
    color: ${cores.coral};
    width: 100%;
    height: 24px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }
`

export const Prices = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-top: 40px;
  margin-bottom: 24px;

  span {
    display: block;
    color: ${cores.bege};
  }
`

export const CartItem = styled.li`
  background-color: ${cores.bege};
  display: flex;
  padding-top: 8px;
  padding-left: 8px;
  padding-bottom: 16px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${cores.coral};
    font-weight: bold;
    font-size: 18px;
    padding-bottom: 16px;
  }

  span {
    display: block;
    color: ${cores.coral};
    font-size: 14px;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${lixeira});
    background-color: transparent;
    height: 16px;
    width: 16px;
    border: none;
    position: absolute;
    margin-left: 316px;
    margin-top: 72px;
  }
`

export const Comprar = styled.button`
  background-color: ${cores.bege};
  color: ${cores.coral};
  width: 100%;
  height: 24px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
`

export const CEPnum = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Cep = styled.div`
  display: block;
  margin-bottom: 8px;
  width: 155px;
`
