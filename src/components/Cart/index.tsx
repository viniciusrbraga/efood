import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import {
  CartContainer,
  CartItem,
  Comprar,
  Overlay,
  Prices,
  Sidebar
} from './styles'
import { formataPreco } from '../EatsList'

const Cart = () => {
  const { aberto, eats } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotal = () => {
    return eats.reduce((acumulador, valorTotal) => {
      return (acumulador += valorTotal.preco!)
    }, 0)
  }

  return (
    <CartContainer className={aberto ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {eats.map((eat) => (
            <CartItem key={eat.id}>
              <img src={eat.foto} alt={eat.nome} />
              <div>
                <h3>{eat.nome}</h3>
                <span>{formataPreco(eat.preco)}</span>
              </div>
              <button onClick={() => removeItem(eat.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <span>Valor total</span>
          <span>{formataPreco(getTotal())}</span>
        </Prices>
        <Comprar title="Continuar com a entrega" type="button">
          Continuar com a entrega
        </Comprar>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
