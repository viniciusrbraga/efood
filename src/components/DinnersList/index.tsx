import { Container, List, Menu } from './styles'

import Dinner from '../Dinner'
import { Restaurant } from '../../pages/Home'

export type Props = {
  restaurants: Restaurant[]
}

const DinnersList = ({ restaurants }: Props) => {
  const getRestaurantTags = (restaurant: Restaurant) => {
    const tags = []

    if (restaurant.highlighted) {
      tags.push('Destaque da semana')
    }

    tags.push(restaurant.type)

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
                  title={restaurant.title}
                  highlighted={restaurant.highlighted}
                  type={getRestaurantTags(restaurant)}
                  note={restaurant.evaluation}
                  description={restaurant.description}
                  image={restaurant.cover}
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
