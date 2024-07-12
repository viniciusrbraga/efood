import styled from 'styled-components'
import { cores } from '../../styles'

export const SubTitulo = styled.h3`
  color: ${cores.coral};
  font-size: 18px;
  font-weight: 900;
  margin-top: 59px;
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

export const HeroContainer = styled.header`
  background-color: ${cores.creme};
  height: 186px;
  width: 1366px;
  margin: 0 auto;
  justify-content: space-between;
`

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1024px;
  margin: 0 auto;

  img {
    margin-top: 40px;
    margin-bottom: 65.5px;
    width: 125px;
    height: 57.5px;
  }
`

export const CabecalhoBanner = styled.div`
  display: block;
  padding-top: 24px;
  justify-content: space-between;
  width: 1024px;
  margin: 0 auto;
`

export const Banner = styled.div`
  width: 1366px;
  height: 280px;
  // background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)):
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
