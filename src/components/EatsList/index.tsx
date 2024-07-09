import { Container, List, Menu } from './styles'
import { Restaurant } from '../../pages/Home'

import Eat from '../Eat'

export type Props = {
  menu: Restaurant
}

const EatsList = ({ menu }: Props) => (
  <Container>
    <div className="container">
      <Menu>
        <List>
          {menu.cardapio.map((cart) => (
            <Eat
              key={cart.id}
              foto={cart.foto}
              preco={cart.preco}
              id={cart.id}
              nome={cart.nome}
              descricao={cart.descricao}
              porcao={cart.porcao}
            />
          ))}
        </List>
      </Menu>
    </div>
  </Container>
)

export default EatsList
