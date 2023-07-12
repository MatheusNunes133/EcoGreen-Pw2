import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css';

interface IProps {
    autenticacao: boolean;
}

const Navbar: React.FC<IProps> = ({ autenticacao }) => {
    return (
        <AppBar>
            <Toolbar className="nav">
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Grid container alignItems="center" spacing={2}>
                            <Grid item>
                                <Typography variant="h6" component="div">
                                    <Link to="/">
                                        <img className="navLogo" src="/ecogreen.png" alt="logo ecogreen" />
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button className="navButton" color="inherit" component={Link} to="/">
                                    <h3>Home</h3>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button className="navButton" color="inherit" component={Link} to="/postagens">
                                    <h3>Postagens</h3>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        {autenticacao ? (
                            <a href="/perfil">
                                <IconButton color="inherit">
                                    <img className="navPerfil" src="/perfil.svg" alt="perfil" />
                                </IconButton>
                            </a>
                        ) : (
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item>
                                    <a href="/login">
                                        <Button id="button-entrar" className="navButton" color="inherit" component={Link} to="/login">
                                            <h3>Entrar</h3>
                                        </Button>
                                    </a>
                                </Grid>
                                <Grid item>
                                    <a href="/cadastro">
                                        <Button id="button-registro" className="navButton" color="inherit" component={Link} to="/cadastro">
                                            <h3>Registre-se</h3>
                                        </Button>
                                    </a>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;