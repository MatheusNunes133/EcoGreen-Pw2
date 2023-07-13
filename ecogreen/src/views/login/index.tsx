import Button from "../../components/button/index"
import "../login/index.css"
import Input from "../../components/input/index"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../service/Api"
import { Notify, notifyError, notifySuccess } from "../../components/NotiFy"

export default function loginPage() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function getUsername(event: any) {
        setUsername(event.target.value)
    }

    function getPassword(event: any) {
        setPassword(event.target.value)
    }

    async function login() {
        const result = await api.post("/user/login", {
            username: username,
            password: password
        })

        if (result.status == 200) {
            localStorage.setItem("tokenJWT", JSON.stringify(result.data.token))
            notifySuccess("Login realizado!")
            setTimeout(() => { navigate("/") }, 1000)
            setTimeout(() => {
                window.location.reload();
                navigate("/");
              }, 1000);

        } else {
            notifyError(result.data)
        }
    }

    return (
        <>
            <Notify />
            <div className="content-login">
                <img src="/ecogreen.png" alt="logo ecogreen" />
                <h2>Entre para construir um melhor ambiente. Se você não tem uma conta cadastre-se</h2>
                <h4>Você consegue se <a href="/cadastro">registrar aqui!</a></h4>

            </div>

            <div className="form-login">
                <h1 className="title-form">Entrar</h1>
                <Input placeholder={"Digite seu usuário"} width={369} height={50} onChangeFunction={() => getUsername(event)} /> <br /> <br />
                <Input placeholder={"Digite sua senha"} width={369} height={50} onChangeFunction={() => getPassword(event)} /> <br /> <br />

                <Button textColor="white" height={50} width={369} name="Entrar" login={() => login()} />
            </div>
        </>
    )
}