import { Container, List, Menu } from './styles'
import { Restaurant } from '../../types'

import Eat from '../Eat'

export type Props = {
  rest: Restaurant
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
