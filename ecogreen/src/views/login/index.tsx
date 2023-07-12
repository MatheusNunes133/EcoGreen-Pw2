import Button from "../../components/button/index"
import "../login/index.css"
import Input from "../../components/input/index"

export default function loginPage() {
    return (
        <>
            <div className="content-login">
                <img src="/ecogreen.png" alt="logo ecogreen" />
                <h3>Entre para construir um melhor ambiente. Se você não tem uma conta cadastre-se</h3>
                <h4>Você consegue se <a href="/cadastro">registrar aqui!</a></h4>
        
            </div>
          
            <div className="form-login">
                <h1 className="title-form">Entrar</h1>
                <Input placeholder={"Digite seu usuário"} width={369} height={50} /> <br /> <br />
                <Input placeholder={"Digite sua senha"} width={369} height={50} /> <br /> <br />

                <a href="/Login"><Button height={50} width={369} name="Entrar"/></a>
            </div>
        </>
    )
}