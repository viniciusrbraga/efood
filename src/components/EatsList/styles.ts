import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.section`
  padding: 32px 0;
  background-color: ${cores.creme};
  max-width: 1366px;
  margin: 0 auto;
  }
`

export const Menu = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-top: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    width: 768px;
    margin-left: 96px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    margin-left: 128px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
