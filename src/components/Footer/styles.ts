import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.bege};
  padding: 32px 0px;
  font-size: 14px;
  max-width: 1366px;
  margin: 0 auto;
  text-align: center;
`

export const Social = styled.div`
  display: flex;
  justify-content: center;

  img {
    margin-top: 24px;
    margin-right: 8px;
    margin-bottom: 80px;
  }
`
export const SectionTitle = styled.h4`
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
`

export const Message = styled.p`
  color: ${cores.coral};
  font-size: 10px;
  max-width: 480px;
  margin-bottom: 40px;
  margin: 0 auto;
`
