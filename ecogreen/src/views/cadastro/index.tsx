import Button from "../../components/button/Button"
import Input from "../../components/input/index"
import "../cadastro/index.css"

const Cadastro = () => {
    return (
        <div className="conteudo">
            <img src="/ecogreen.png" alt="logo ecogreen" />
            <h1>Cadastrar-se</h1>
            <div className="input-container">
                <Input />
                <Input />
                <Input />
                <Input />
            </div>
            <Button name={"Cadastre-se"} />
            <h4>Já possui uma conta? <a href="/login">Entre aqui!</a> </h4>
        </div>
    )
}

export default Cadastro;