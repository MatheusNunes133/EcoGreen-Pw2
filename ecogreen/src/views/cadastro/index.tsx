import Button from "../../components/button/Button"
import Input from "../../components/input/index"
import "../cadastro/index.css"

const Cadastro = () => {
    return (
        <div className="conteudo">
            <img src="/ecogreen.png" alt="logo ecogreen" />
            <h1>Cadastrar-se</h1>
            <div className="input-container">
                <Input placeholder={"Username"} width={369} height={62} />
                <Input placeholder={"Nome"} width={369} height={62} />
                <Input placeholder={"Senha"} width={369} height={62} />
                <Input placeholder={"Confirme a senha"} width={369} height={62} />
            </div>
            <Button name={"Cadastre-se"} />
            <h4>Já possui uma conta? <a href="/login">Entre aqui!</a> </h4>
        </div>
    )
}

export default Cadastro;