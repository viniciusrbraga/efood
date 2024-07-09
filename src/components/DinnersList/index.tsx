import { Container, List, Menu } from './styles'

import Dinner from '../Dinner'
import { Restaurant } from '../../pages/Home'

export type Props = {
  restaurants: Restaurant[]
}

const DinnersList = ({ restaurants }: Props) => {
  const getRestaurantTags = (restaurant: Restaurant) => {
    const tags = []

    if (restaurant.destacado) {
      tags.push('Destaque da semana')
    }

    tags.push(restaurant.tipo)

    return tags
  }

  return (
    <Container>
      <div className="container">
        <Menu>
          <List>
            {restaurants.map((restaurant) => (
              <li key={restaurant.id}>
                <Dinner
                  id={restaurant.id}
                  titulo={restaurant.titulo}
                  destacado={restaurant.destacado}
                  tipo={getRestaurantTags(restaurant)}
                  nota={restaurant.avaliacao}
                  descricao={restaurant.descricao}
                  capa={restaurant.capa}
                />
              </li>
            ))}
          </List>
        </Menu>
      </div>
    </Container>
  )
}

export default DinnersList
