import { useState } from 'react'
import {
  Card,
  Descricao,
  Nome,
  Botao,
  Modal,
  ModalContent,
  DescricaoContainer,
  DadosContainer
} from './styles'

import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

import fechar from '../../assets/images/fechar.png'
import { Prato } from '../../pages/Home'
import { formataPreco } from '../EatsList'

type Props = {
  prato: Prato
}

interface ModalState {
  estaVisivel: boolean
}

const Eat = ({ prato }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    estaVisivel: false
  })

  const closeModal = () => {
    setModal({
      estaVisivel: false
    })
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    closeModal()
    dispatch(add(prato))
    dispatch(open())
  }

  return (
    <>
      <Card>
        <img src={prato.foto} alt={prato.nome} />
        <Nome>{prato.nome}</Nome>
        <Descricao>{prato.descricao}</Descricao>
        <Botao
          onClick={() => {
            setModal({
              estaVisivel: true
            })
          }}
        >
          Mais detalhes
        </Botao>
      </Card>
      <Modal className={modal.estaVisivel ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={prato.foto} alt={prato.nome} />
          <DadosContainer>
            <DescricaoContainer>
              <h4>{prato.nome}</h4>
              <p>{prato.descricao}</p>
              <p>{prato.porcao}</p>
            </DescricaoContainer>
            <Botao onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(prato.preco)}
            </Botao>
          </DadosContainer>
          <img
            className="CloseModal"
            src={fechar}
            alt="iconde de fechar"
            onClick={() => {
              closeModal()
            }}
          />
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}

export default Eat
