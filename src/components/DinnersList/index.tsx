import { Container, List, Menu } from './styles'

import Dinner from '../Dinner'
import { Restaurant } from '../../types'
import Loader from '../Loader'

export type Props = {
  restaurants?: Restaurant[]
  isLoading: boolean
}

const DinnersList = ({ restaurants, isLoading }: Props) => {
  const getRestaurantTags = (restaurant: Restaurant) => {
    const tags = []

    if (restaurant.destacado) {
      tags.push('Destaque da semana')
    }

    tags.push(restaurant.tipo)

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container>
      <div className="container">
        <Menu>
          <List>
            {restaurants &&
              restaurants.map((restaurant) => (
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
