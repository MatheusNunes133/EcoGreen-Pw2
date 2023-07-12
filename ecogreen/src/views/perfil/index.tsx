import { Grid } from '@mui/material';
import Input from '../../components/input';
import Button from '../../components/button';
import './perfil.css';
import Navbar from '../../components/navbar';
import AuthAvatar from '../../components/avatar';

const Perfil = () =>  {
    return (
        <div>
            <Navbar autenticacao={false} />
            <div className="conteudo">
                <Grid container direction="column" alignItems="center" spacing={1}>
                    <AuthAvatar autenticacao={true} />
                    <Grid item>
                        nome usuário
                    </Grid>
                    <Grid item className="input-container">
                        <Input placeholder="Username" width={369} height={62} />
                    </Grid>
                    <Grid item className="input-container">
                        <Input placeholder="Nome" width={369} height={62} />
                    </Grid>
                    <Grid item className="input-container">
                        <Input placeholder="Senha Atual" width={369} height={62} />
                    </Grid>
                    <Grid item className="input-container">
                        <Input placeholder="Nova senha" width={369} height={62} />
                    </Grid>
                    <Grid item>
                        <Button textColor="white" width={369} height={50} name="Salvar" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Perfil;