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
