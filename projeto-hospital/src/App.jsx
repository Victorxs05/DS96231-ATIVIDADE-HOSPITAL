import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import QuemSomos from './pages/QuemSomos'
import Servicos from './pages/Servicos'
import CorpoClinico from './pages/CorpoClinico'
import Contato from './pages/Contato'
import Blog from './pages/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/quemsomos" element={<QuemSomos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/corpoclinico" element={<CorpoClinico />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/blog" element={<Blog />} />

        </Routes>
      </main>
    </>
  )
}

export default App
