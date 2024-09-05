import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${cores.bege};
  color: ${cores.coral};
  width: 100%;
  height: 24px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
`
export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branco};
  color: ${cores.branco};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
`
