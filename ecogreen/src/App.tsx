import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Cadastro from './views/cadastro/index'
import Login from './views/login/index'
import Home from './views/home/index'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Cadastro />} path="Cadastro" />
          <Route element={<Login />} path="Login" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
