import { Container, List, Menu } from './styles'
import { Restaurant } from '../../pages/Home'

import Eat from '../Eat'

export type Props = {
  rest: Restaurant
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const EatsList = ({ rest }: Props) => (
  <Container>
    <div className="container">
      <Menu>
        <List>
          {rest.cardapio.map((cart) => (
            <Eat key={cart.id} prato={cart} />
          ))}
        </List>
      </Menu>
    </div>
  </Container>
)

export default EatsList
