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
