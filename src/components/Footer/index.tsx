import { Container, Message, Social } from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import x from '../../assets/images/x.png'

const Footer = () => (
  <Container>
    <img src={logo} alt="eFood" />
    <Social>
      <img src={instagram} alt="Instagram" />
      <img src={facebook} alt="Facebook" />
      <img src={x} alt="X" />
    </Social>
    <Message>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </Message>
  </Container>
)

export default Footer
