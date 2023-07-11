import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Cadastro from './views/cadastro/index'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Cadastro />} path="Cadastro" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
