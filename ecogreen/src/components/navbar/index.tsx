import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './navbar.css';

interface IProps{
    autenticacao: boolean
}

const Navbar: React.FC<IProps> = ({autenticacao}) => {
    return (
        <AppBar>
            <Toolbar className="nav">
                <Grid container alignItems="center">
                    <Grid item xs={1}>
                        <Typography variant="h6" component="div">
                            <Link to="/">
                                <img className="navLogo" src="/ecogreen.png" alt="logo ecogreen" />
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} container justifyContent="flex-end">
                        <Button className="navButton" color="inherit" component={Link} to="/">
                            <h3>Home</h3>
                        </Button>
                        <Button className="navButton" color="inherit" component={Link} to="/todaspostagens">
                            <h3>Postagens</h3>
                        </Button>
                    </Grid>
                
                    {autenticacao ? 
                        <a href="/perfil">
                            <Grid item xs={12} sm={7} container justifyContent="flex-end">
                                <img className='navPerfil' src="/perfil.svg" />
                            </Grid>
                        </a>
                     : 
                        <Grid item xs={12} sm={7} container justifyContent="flex-end">
                            <a href="/login">
                                <Button id="button-entrar" className="navButton" color="inherit" component={Link} to="/login">
                                    <h3>Entrar</h3>
                                </Button>
                            </a>
                            <a href="/cadastro">
                                <Button id="button-registro" className="navButton" color="inherit" component={Link} to="/cadastro">
                                    <h3>Registre-se</h3>
                                </Button>
                            </a>
                           
                        </Grid> 
                    
                    }

                   
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;