import EatsList from '../../components/EatsList'
import { Hero } from '../../components/Hero'
import Food from '../../models/Food'

import pizza from '../../assets/images/piz.png'

const pizzaria: Food[] = [
  {
    id: 1,
    image: pizza,
    infos: [],
    title: 'Pizza Marguerita',
    note: 0,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    link: 'Adicionar ao carrinho'
  },
  {
    id: 2,
    image: pizza,
    infos: [],
    title: 'Pizza Marguerita',
    note: 0,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    link: 'Adicionar ao carrinho'
  },
  {
    id: 3,
    image: pizza,
    infos: [],
    title: 'Pizza Marguerita',
    note: 0,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    link: 'Adicionar ao carrinho'
  },
  {
    id: 4,
    image: pizza,
    infos: [],
    title: 'Pizza Marguerita',
    note: 0,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    link: 'Adicionar ao carrinho'
  },
  {
    id: 5,
    image: pizza,
    infos: [],
    title: 'Pizza Marguerita',
    note: 0,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    link: 'Adicionar ao carrinho'
  },
  {
    id: 6,
    image: pizza,
    infos: [],
    title: 'Pizza Marguerita',
    note: 0,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    link: 'Adicionar ao carrinho'
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
