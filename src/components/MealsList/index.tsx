import { Container, List, Menu } from './styles'

import Meal from '../Meal'
import Food from '../../models/Food'

export type Props = {
  meals: Food[]
}

const MealsList = ({ meals }: Props) => (
  <Container>
    <div className="container">
      <Menu>
        <List>
          {meals.map((meal) => (
            <Meal
              key={meal.id}
              image={meal.image}
              infos={meal.infos}
              title={meal.title}
              note={meal.note}
              description={meal.description}
              link={meal.link}
            />
          ))}
        </List>
      </Menu>
    </div>
  </Container>
)

export default MealsList
