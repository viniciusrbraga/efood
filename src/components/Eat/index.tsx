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

import fechar from '../../assets/images/fechar.png'

// import { Link } from 'react-router-dom'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

interface ModalState {
  estaVisivel: boolean
  // url: string
}

const Eat = ({ foto, nome, descricao, porcao, preco }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    estaVisivel: false
    // url: ''
  })

  const closeModal = () => {
    setModal({
      estaVisivel: false
      // url: ''
    })
  }

  return (
    <>
      <Card>
        <img src={foto} alt={nome} />
        <Nome>{nome}</Nome>
        <Descricao>{descricao}</Descricao>
        {/* <Botao>Mais detalhes</Botao> */}
        <Botao
          onClick={() => {
            setModal({
              estaVisivel: true
              // url: media.url
            })
          }}
        >
          Mais detalhes
        </Botao>
      </Card>
      <Modal className={modal.estaVisivel ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={foto} alt="Pizza" />
          <DadosContainer>
            <DescricaoContainer>
              <h4>{nome}</h4>
              <p>{descricao}</p>
              <p>{porcao}</p>
            </DescricaoContainer>
            <Botao>Adicionar ao carrinho - R$ {preco}</Botao>
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
