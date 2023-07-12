import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Cadastro from './views/cadastro/index'
import Login from './views/login/index'
import Home from './views/home/index'
import Postagens from './views/postagens'
import Perfil from './views/perfil'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Postagens />} path='Postagens' />
          <Route element={<Cadastro />} path="Cadastro" />
          <Route element={<Login />} path="Login" />
          <Route element={<Perfil />} path="Perfil" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

