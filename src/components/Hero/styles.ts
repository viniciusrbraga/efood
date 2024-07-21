import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeroContainer = styled.header`
  background-color: ${cores.creme};
  height: 186px;
  width: 1366px;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: ${breakpoints.desktop}) {
    width: 1024px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 768px;
  }
`

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1024px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    width: 768px;
    margin-left: 64px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 468px;
    margin-left: 32px;
  }

  img {
    margin-top: 40px;
    margin-bottom: 65.5px;
    width: 125px;
    height: 57.5px;
  }
`

export const SubTitulo = styled.h3`
  color: ${cores.coral};
  font-size: 18px;
  font-weight: 900;
  margin-top: 59px;
  cursor: pointer;
`

export const SubTit = styled.h3`
  color: ${cores.coral};
  font-size: 18px;
  font-weight: 900;
  margin-top: 59px;
`

export const Banner = styled.div`
  width: 1366px;
  height: 280px;
  // background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)):
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const CabecalhoBanner = styled.div`
  display: block;
  padding-top: 24px;
  justify-content: space-between;
  width: 1024px;
  margin: 0 auto;
`

export const Tipo = styled.h3`
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branco};
  margin-bottom: 160px;
`

export const Nome = styled.h3`
  font-size: 32px;
  font-weight: 900;
  color: ${cores.branco};
`
