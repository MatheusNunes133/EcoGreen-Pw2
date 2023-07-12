import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar: React.FC = () => {
    return (
        <AppBar>
            <Toolbar className="nav">
                <Grid container alignItems="center">
                    <Grid item xs={6} sm={4}>
                        <Typography variant="h6" component="div">
                            <Link to="/">
                                <img className="navImage" src="/ecogreen.png" alt="logo ecogreen" />
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} container justifyContent="center">
                        <Button className="navButton" color="inherit" component={Link} to="/">
                            <h3>Home</h3>
                        </Button>
                        <Button className="navButton" color="inherit" component={Link} to="/postagens">
                            <h3>Postagens</h3>
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={4} container justifyContent="flex-end">
                        <Button className="navButton" color="inherit" component={Link} to="/login">
                            <h3>Entrar</h3>
                        </Button>
                        <Button className="navButton" color="inherit" component={Link} to="/cadastro">
                            <h3>Registrar</h3>
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;