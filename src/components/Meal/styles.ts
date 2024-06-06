import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.coral};
  position: relative;
  margin-bottom: 40px;

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    height: 217px;
    width: 472px;
    object-fit: cover;
  }
`

export const Titulo = styled.div`
  color: ${cores.coral};
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 6px;

  img {
    max-width: 21px;
    max-height: 21px;
  }
`
export const Score = styled.div`
  display: flex;
`

export const Nome = styled.h3`
  display: block;
`
export const Nota = styled.h3`
  display: block;
  margin-right: 6px;
`

export const Descricao = styled.p`
  color: ${cores.coral};
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 6px;
`
export const Infos = styled.div`
  position: absolute;
  top: 0px;
  right: 6px;
`
export const Botao = styled.button`
  background-color: ${cores.coral};
  position: relative;
  width: 82px;
  height: 24px;
  bottom: 6px;
  left: 6px;
  border: none;
  color: ${cores.creme};
  cursor: pointer;
`
