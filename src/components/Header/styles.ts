import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

import fundo from '../../assets/images/fundo.png'

export const HeaderBar = styled.header`
  background-color: ${cores.creme};
  background-image: url(${fundo});
  padding: 24px;
  width: 1366px;
  height: 384px;
  text-align: center;

  @media (max-width: ${breakpoints.desktop}) {
    width: 1024px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 768px;
  }
`

export const Titulo = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${cores.coral};
  margin-top: 132px;
  margin-left: 414px;
  max-width: 580px;
  text-align: center;

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 240px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 60px;
  }
`
