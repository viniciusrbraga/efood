import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'

import * as Yup from 'yup'
import * as S from './styles'

import { RootReducer } from '../../store'
import { clear, close, remove } from '../../store/reducers/cart'
import { formataPreco, getTotal } from '../../utils'
import { useCompraMutation } from '../../services/api'

import Card from '../../components/Card'
import Button from '../Button'
import InputMask from 'react-input-mask'

const Cart = () => {
  const { aberto, eats } = useSelector((state: RootReducer) => state.cart)
  const [compra, { data, isSuccess, isLoading }] = useCompraMutation()
  const [entrega, setEntrega] = useState(true)
  const [pagamento, setPagamento] = useState(false)
  const [recibo, setRecibo] = useState(false)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const form = useFormik({
    initialValues: {
      nomeRecebedor: '',
      endereco: '',
      cidade: '',
      CEP: '',
      numero: 0,
      complemento: '',
      nomeCartao: '',
      numeroCartao: '',
      CVV: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: Yup.object({
      nomeRecebedor: Yup.string()
        .min(5, 'Informe o nome completo')
        .required('Informe o nome completo'),
      endereco: Yup.string()
        .min(5, 'Informe o endereço')
        .required('Informe o endereço'),
      cidade: Yup.string()
        .min(5, 'Informe a cidade')
        .required('Informe a cidade'),
      CEP: Yup.string()
        .matches(/^[0-9]{2}.[0-9]{3}-[0-9]{3}$/, 'CEP inválido')
        .required('Informe o CEP'),
      numero: Yup.number()
        .moreThan(0, 'Informe o número')
        .required('Informe o número'),
      nomeCartao: Yup.string()
        .min(5, 'Informe o nome completo')
        .required('Informe o nome completo'),
      numeroCartao: Yup.string()
        .min(16, 'Informe o número do cartão')
        .required('Informe o número do cartão'),
      CVV: Yup.string()
        .min(3, 'Informe o CVV completo')
        .max(3, 'Informe o CVV completo')
        .required('Informe o CVV'),
      mesVencimento: Yup.string()
        .min(2, 'Informe o mês de vencimento do cartão')
        .max(2, 'Informe o mês de vencimento do cartão')
        .required('Informe o mês de vencimento do cartão'),
      anoVencimento: Yup.string()
        .min(4, 'Informe o ano de vencimento do cartão')
        .max(4, 'Informe o ano de vencimento do cartão')
        .required('Informe o ano de vencimento do cartão')
    }),
    onSubmit: (values) => {
      compra({
        products: eats.map((eat) => ({
          id: eat.id,
          price: eat.preco as number
        })),
        delivery: {
          receiver: values.nomeRecebedor,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipcode: values.CEP,
            number: values.numero,
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nomeCartao,
            number: values.numeroCartao,
            code: Number(values.CVV),
            expires: {
              month: Number(values.mesVencimento),
              year: Number(values.anoVencimento)
            }
          }
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const alterado = fieldName in form.touched
    const errado = fieldName in form.errors
    const hasError = alterado && errado

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const carrinho = () => {
    setEntrega(true)
    setPagamento(false)
    setRecibo(false)
  }

  const delivery = () => {
    setEntrega(false)
    setPagamento(true)
    setRecibo(false)
  }

  const payment = () => {
    const nomeRecebedorI = document.getElementById(
      'nomeRecebedor'
    ) as HTMLInputElement
    const enderecoI = document.getElementById('endereco') as HTMLInputElement
    const cidadeI = document.getElementById('cidade') as HTMLInputElement
    const CEPI = document.getElementById('CEP') as HTMLInputElement
    const numeroI = document.getElementById('numero') as HTMLInputElement

    if (
      checkInputHasError('nomeRecebedor') ||
      nomeRecebedorI.value === '' ||
      checkInputHasError('endereco') ||
      enderecoI.value === '' ||
      checkInputHasError('cidade') ||
      cidadeI.value === '' ||
      checkInputHasError('CEP') ||
      CEPI.value === '' ||
      checkInputHasError('numero') ||
      numeroI.value === '' ||
      numeroI.value === '0'
    ) {
      setEntrega(false), setPagamento(true), setRecibo(false)
    } else {
      setEntrega(false), setPagamento(false), setRecibo(true)
    }
  }

  const order = () => {
    const nomeCartaoI = document.getElementById(
      'nomeCartao'
    ) as HTMLInputElement
    const numeroCartaoI = document.getElementById(
      'numeroCartao'
    ) as HTMLInputElement
    const CVVI = document.getElementById('CVV') as HTMLInputElement
    const mesVencimentoI = document.getElementById(
      'mesVencimento'
    ) as HTMLInputElement
    const anoVencimentoI = document.getElementById(
      'anoVencimento'
    ) as HTMLInputElement

    if (
      checkInputHasError('nomeCartao') ||
      nomeCartaoI.value === '' ||
      checkInputHasError('numeroCartao') ||
      numeroCartaoI.value === '' ||
      checkInputHasError('CVV') ||
      CVVI.value === '' ||
      checkInputHasError('mesVencimento') ||
      mesVencimentoI.value === '' ||
      checkInputHasError('anoVencimento') ||
      anoVencimentoI.value === ''
    ) {
      setEntrega(false), setPagamento(false), setRecibo(true)
    } else {
      setEntrega(false), setPagamento(false), setRecibo(false)
    }
  }

  const finish = () => {
    dispatch(close())
    {
      eats.map((eat) => removeItem(eat.id))
    }
    setEntrega(true)
    setPagamento(false)
    setRecibo(false)
  }

  return (
    <div className="container">
      {eats.length > 0 ? (
        <S.CartContainer className={aberto ? 'is-open' : ''}>
          <>
            {/* {isSuccess && data ? ( */}
            {isSuccess ? (
              <>
                <S.Overlay onClick={closeCart} />
                <S.Sidebar>
                  <h2>
                    {/* Pedido realizado - <strong> {data.orderId} </strong> */}
                    Pedido realizado - <strong> success </strong>
                  </h2>
                  <p>
                    Estamos felizes em informar que seu pedido já está em
                    processo de preparação e, em breve, será entregue no
                    endereço fornecido.
                  </p>
                  <p>
                    Gostaríamos de ressaltar que nossos entregadores não estão
                    autorizados a realizar cobranças extras.
                  </p>
                  <p>
                    Lembre-se da importância de higienizar as mãos após o
                    recebimento do pedido, garantindo assim sua segurança e
                    bem-estar durante a refeição.
                  </p>
                  <p>
                    Esperamos que desfrute de uma deliciosa e agradável
                    experiência gastronômica. Bom apetite!
                  </p>
                  <Button
                    type="button"
                    onClick={finish}
                    title="Concluir compra"
                  >
                    Concluir
                  </Button>
                </S.Sidebar>
              </>
            ) : (
              <form onSubmit={form.handleSubmit} className="container">
                <S.CartContainer className={aberto ? 'is-open' : ''}>
                  {entrega ? (
                    <>
                      <S.Overlay onClick={closeCart} />
                      <S.Sidebar>
                        <ul>
                          {eats.map((eat) => (
                            <S.CartItem key={eat.id}>
                              <img src={eat.foto} alt={eat.nome} />
                              <div>
                                <h3>{eat.nome}</h3>
                                <span>{formataPreco(eat.preco)}</span>
                              </div>
                              <button
                                onClick={() => removeItem(eat.id)}
                                type="button"
                              />
                            </S.CartItem>
                          ))}
                        </ul>
                        <S.Prices>
                          <span>Valor total</span>
                          <span>{formataPreco(getTotal(eats))}</span>
                        </S.Prices>
                        <S.Comprar
                          onClick={delivery}
                          title="Continuar com a entrega"
                          type="button"
                        >
                          Continuar com a entrega
                        </S.Comprar>
                      </S.Sidebar>
                    </>
                  ) : (
                    <>
                      {pagamento ? (
                        <Card>
                          <>
                            <S.Overlay onClick={closeCart} />
                            <S.Sidebar>
                              <h2>Entrega</h2>
                              <label htmlFor="nomeRecebedor">
                                Quem irá receber
                              </label>
                              <input
                                id="nomeRecebedor"
                                type="text"
                                name="nomeRecebedor"
                                value={form.values.nomeRecebedor}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={
                                  checkInputHasError('nomeRecebedor')
                                    ? 'error'
                                    : ''
                                }
                              />
                              <label htmlFor="endereco">Endereço</label>
                              <input
                                id="endereco"
                                type="text"
                                name="endereco"
                                value={form.values.endereco}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={
                                  checkInputHasError('endereco') ? 'error' : ''
                                }
                              />
                              <label htmlFor="cidade">Cidade</label>
                              <input
                                id="cidade"
                                type="text"
                                name="cidade"
                                value={form.values.cidade}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={
                                  checkInputHasError('cidade') ? 'error' : ''
                                }
                              />
                              <S.CEPnum>
                                <S.Cep>
                                  <label htmlFor="CEP">CEP</label>
                                  <InputMask
                                    id="CEP"
                                    type="text"
                                    name="CEP"
                                    value={form.values.CEP}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={
                                      checkInputHasError('CEP') ? 'error' : ''
                                    }
                                    mask="99.999-999"
                                  />
                                </S.Cep>
                                <S.Cep>
                                  <label htmlFor="numero">Número</label>
                                  <input
                                    id="numero"
                                    type="text"
                                    name="numero"
                                    value={form.values.numero}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={
                                      checkInputHasError('numero')
                                        ? 'error'
                                        : ''
                                    }
                                  />
                                </S.Cep>
                              </S.CEPnum>
                              <label htmlFor="compl">
                                Complemento (opcional)
                              </label>
                              <input id="compl" type="text" />
                              <Button
                                onClick={payment}
                                type="button"
                                title="Clique aqui para continuar com o pagamento."
                              >
                                Continuar com o pagamento
                              </Button>
                              <Button
                                onClick={carrinho}
                                type="button"
                                title="Clique aqui para voltar para o carrinho."
                              >
                                Voltar para o carrinho
                              </Button>
                            </S.Sidebar>
                          </>
                        </Card>
                      ) : (
                        <>
                          {/* {recibo ? ( */}
                          <>
                            <S.Overlay onClick={closeCart} />
                            <S.Sidebar>
                              <h2>Pagamento - Valor a pagar R$ 190,90</h2>
                              <label htmlFor="nomeCartao">Nome no cartão</label>
                              <input
                                id="nomeCartao"
                                type="text"
                                name="nomeCartao"
                                value={form.values.nomeCartao}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={
                                  checkInputHasError('nomeCartao')
                                    ? 'error'
                                    : ''
                                }
                              />
                              <S.CEPnum>
                                <S.Cep>
                                  <label htmlFor="numeroCartao">
                                    Número do cartão
                                  </label>
                                  <InputMask
                                    id="numeroCartao"
                                    type="text"
                                    name="numeroCartao"
                                    value={form.values.numeroCartao}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={
                                      checkInputHasError('numeroCartao')
                                        ? 'error'
                                        : ''
                                    }
                                    mask="9999 9999 9999 9999"
                                  />
                                </S.Cep>
                                <S.Cep>
                                  <label htmlFor="CVV" className="cvv">
                                    CVV
                                  </label>
                                  <InputMask
                                    id="CVV"
                                    type="text"
                                    name="CVV"
                                    value={form.values.CVV}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={
                                      checkInputHasError('CVV') ? 'error' : ''
                                    }
                                    mask="999"
                                  />
                                </S.Cep>
                              </S.CEPnum>
                              <S.CEPnum>
                                <S.Cep>
                                  <label htmlFor="mesVencimento">
                                    Mês de vencimento
                                  </label>
                                  <InputMask
                                    id="mesVencimento"
                                    type="text"
                                    name="mesVencimento"
                                    value={form.values.mesVencimento}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={
                                      checkInputHasError('mesVencimento')
                                        ? 'error'
                                        : ''
                                    }
                                    mask="99"
                                  />
                                </S.Cep>
                                <S.Cep>
                                  <label htmlFor="anoVencimento">
                                    Ano de vencimento
                                  </label>
                                  <InputMask
                                    id="anoVencimento"
                                    type="text"
                                    name="anoVencimento"
                                    value={form.values.anoVencimento}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={
                                      checkInputHasError('anoVencimento')
                                        ? 'error'
                                        : ''
                                    }
                                    mask="9999"
                                  />
                                </S.Cep>
                              </S.CEPnum>
                              <Button
                                type="submit"
                                // onClick={order}
                                onClick={form.handleSubmit}
                                title="Clique aqui para finalizar o pagamento."
                                disabled={isLoading}
                              >
                                {isLoading
                                  ? 'Finalizando pagamento'
                                  : 'Finalizar pagamento'}
                              </Button>
                              <Button
                                onClick={delivery}
                                type="button"
                                title="Clique aqui para voltar para o endereço."
                              >
                                Voltar para a edição de endereço
                              </Button>
                            </S.Sidebar>
                          </>
                          {/*  ) : ( */}
                          <>
                            {/* <S.Overlay onClick={closeCart} />
                              <S.Sidebar>
                                <h2>
                                  Pedido realizado -{' '}
                                  {data ? (
                                    <strong> {data.orderId} </strong>
                                  ) : (
                                    <strong> error </strong>
                                  )}
                                </h2>
                                <p>
                                  Estamos felizes em informar que seu pedido já
                                  está em processo de preparação e, em breve,
                                  será entregue no endereço fornecido.
                                </p>
                                <p>
                                  Gostaríamos de ressaltar que nossos
                                  entregadores não estão autorizados a realizar
                                  cobranças extras.
                                </p>
                                <p>
                                  Lembre-se da importância de higienizar as mãos
                                  após o recebimento do pedido, garantindo assim
                                  sua segurança e bem-estar durante a refeição.
                                </p>
                                <p>
                                  Esperamos que desfrute de uma deliciosa e
                                  agradável experiência gastronômica. Bom
                                  apetite!
                                </p>
                                <Button
                                  type="button"
                                  onClick={finish}
                                  title="Concluir compra"
                                >
                                  Concluir
                                </Button>
                              </S.Sidebar> */}
                          </>
                          {/* )} */}
                        </>
                      )}
                    </>
                  )}
                </S.CartContainer>
              </form>
            )}
          </>
        </S.CartContainer>
      ) : (
        <>
          <S.CartContainer className={aberto ? 'is-open' : ''}>
            <S.Overlay onClick={closeCart} />
            <S.Sidebar>
              <p className="empty-text">
                O carrinho está vazio, adicione pelo menos um produto para
                continuar com a compra
              </p>
            </S.Sidebar>
          </S.CartContainer>
        </>
      )}
    </div>
  )
}

export default Cart
