import React from 'react';
import { Grid } from '@mui/material';
import Button from '../../components/button/Button';
import Input from '../../components/input/index';
import '../cadastro/index.css';

const Cadastro = () => {
    return (
        <div>
            <div className="conteudo">
                <Grid container direction="column" alignItems="center" spacing={2}>
                    <Grid item>
                        <img src="/ecogreen.png" alt="logo ecogreen" />
                    </Grid>
                    <Grid item>
                        <h1>Cadastrar-se</h1>
                    </Grid>
                    <Grid item className="input-container">
                        <Input placeholder="Username" width={369} height={62} />
                    </Grid>
                    <Grid item className="input-container">
                        <Input placeholder="Nome" width={369} height={62} />
                    </Grid>
                    <Grid item className="input-container">
                        <Input placeholder="Senha" width={369} height={62} />
                    </Grid>
                    <Grid item className="input-container">
                        <Input placeholder="Confirme a senha" width={369} height={62} />
                    </Grid>
                    <Grid item>
                        <Button name="Cadastre-se" />
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