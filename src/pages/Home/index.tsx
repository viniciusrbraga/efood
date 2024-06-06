import MealsList from '../../components/MealsList'
import Meal from '../../models/Food'

import sushi from '../../assets/images/jap.png'
import pasta from '../../assets/images/pas.png'
import Header from '../../components/Header'

const lista: Meal[] = [
  {
    id: 1,
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    note: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    link: 'Saiba mais'
  },
  {
    id: 2,
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: 'Saiba mais'
  },
  {
    id: 3,
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: 'Saiba mais'
  },
  {
    id: 4,
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: 'Saiba mais'
  },
  {
    id: 5,
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: 'Saiba mais'
  },
  {
    id: 6,
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: 'Saiba mais'
  }
]

const Home = () => (
  <>
    <div className="container">
      <Header />
    </div>
    <MealsList meals={lista} />
  </>
)

export default Home
