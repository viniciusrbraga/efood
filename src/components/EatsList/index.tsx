import { Container, List, Menu } from './styles'

import Eat from '../Eat'
import Food from '../../models/Food'

export type Props = {
  meals: Food[]
}

const EatsList = ({ meals }: Props) => (
  <Container>
    <div className="container">
      <Menu>
        <List>
          {meals.map((meal) => (
            <Eat
              key={meal.id}
              image={meal.image}
              price={meal.price}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              portion={meal.portion}
            />
          ))}
        </List>
      </Menu>
    </div>
  </Container>
)

export default EatsList
