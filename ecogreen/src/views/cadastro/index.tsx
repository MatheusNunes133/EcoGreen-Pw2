import React from 'react';
import { Grid } from '@mui/material';
import Button from '../../components/button/index';
import Input from '../../components/input/index';
import '../cadastro/index.css';
import { api } from "../../service/Api"
import { useState } from "react"

import { Notify, notifyError, notifySuccess } from "../../components/NotiFy"

const Cadastro = () => {


    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")


    function getUsername(event: any) {
        setUsername(event.target.value)
    }

    function getPassword(event: any) {
        setPassword(event.target.value)
    }

    function getName(event: any) {
        setName(event.target.value)
    }

    async function register() {
        const result = await api.post("/user/register", {
            username: username,
            password: password,
            name: name
        })

        if (result.status == 200) {
            console.log("ghogho")
            console.log(result.data.success)
            notifySuccess(result.data.success)
        } else {
            notifyError(result.data)
        }
    }

    return (
        <div>

            <div className="conteudo">
                <Notify />
                <Grid container direction="column" alignItems="center" spacing={2}>
                    <Grid item>
                        <img src="/ecogreen.png" alt="logo ecogreen" />
                    </Grid>
                    <Grid item>
                        <h1>Cadastrar-se</h1>
                    </Grid>
                    <Grid item className="input-container" onChange={() => getUsername(event)}>
                        <Input placeholder="Username" width={369} height={62} />
                    </Grid>
                    <Grid item className="input-container">
                        <Input placeholder="Nome" width={369} height={62} />
                    </Grid>
                    <Grid item className="input-container">
                        <Input placeholder="Senha" width={369} height={62} />
                    </Grid>
                    {/* <Grid item className="input-container">
                        <Input placeholder="Confirme a senha" width={369} height={62} />
                    </Grid> */}
                    <Grid item onClick={() => register()}>
                        <Button textColor="white" width={369} height={50} name="Cadastre-se" />
                    </Grid>
                    <Grid item>
                        <h4>
                            Já possui uma conta? <a href="/login">Entre aqui!</a>
                        </h4>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Cadastro;