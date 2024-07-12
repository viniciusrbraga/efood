import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Rest from './pages/Rest'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/rest/:id" element={<Rest />} />
  </Routes>
)

export default Rotas
