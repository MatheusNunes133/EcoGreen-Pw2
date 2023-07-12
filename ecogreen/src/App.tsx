import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Cadastro from './views/cadastro/index'
import Home from './views/home'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Cadastro />} path="Cadastro" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
