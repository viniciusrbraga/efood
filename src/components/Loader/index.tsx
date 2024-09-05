import { BarLoader } from 'react-spinners'
import { cores } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <BarLoader color={cores.branco} />
  </Container>
)

export default Loader
