import EatsList from '../../components/EatsList'
import { Hero } from '../../components/Hero'
import Food from '../../models/Food'

import pizza from '../../assets/images/piz.png'

const pizzaria: Food[] = [
  {
    image: pizza,
    price: 1.99,
    id: 1,
    name: 'pizza',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    portion: '1 a 2 pessoas'
  },
  {
    image: pizza,
    price: 1.99,
    id: 2,
    name: 'pizza',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    portion: '1 a 2 pessoas'
  },
  {
    image: pizza,
    price: 1.99,
    id: 3,
    name: 'pizza',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    portion: '1 a 2 pessoas'
  },
  {
    image: pizza,
    price: 1.99,
    id: 4,
    name: 'pizza',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    portion: '1 a 2 pessoas'
  },
  {
    image: pizza,
    id: 5,
    price: 1.99,
    name: 'pizza',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    portion: '1 a 2 pessoas'
  },
  {
    image: pizza,
    price: 1.99,
    id: 6,
    name: 'pizza',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    portion: '1 a 2 pessoas'
  }
]

const perfil = () => (
  <>
    <div className="container">
      <Hero />
    </div>
    <EatsList meals={pizzaria} />
  </>
)

export default perfil
