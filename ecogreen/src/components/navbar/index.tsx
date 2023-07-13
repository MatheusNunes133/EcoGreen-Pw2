import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, IconButton, Hidden, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css';

interface IProps {
    autenticacao: boolean;
}

const Navbar: React.FC<IProps> = ({ autenticacao }) => {
    const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(menuAnchorEl);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchorEl(null);
    };

    const renderMenu = (
        <Menu
            anchorEl={menuAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose} component={Link} to="/">
                Home
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/postagens">
                Postagens
            </MenuItem>
            {!autenticacao && (
                <div>
                    <MenuItem onClick={handleMenuClose} component={Link} to="/login">
                        Entrar
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose} component={Link} to="/cadastro">
                        Registre-se
                    </MenuItem>
                </div>
            )}
        </Menu>
    );

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
                            <Hidden mdDown>
                                {/* Exibir os botões na barra de navegação apenas em tamanhos de tela maiores */}
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
                            </Hidden>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Hidden mdUp>
                            {/* Exibir o ícone do menu apenas em tamanhos de tela menores */}
                            <IconButton color="inherit" onClick={handleMenuOpen}>
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        {autenticacao ? (
                            <a href="/perfil">
                                <IconButton color="inherit">
                                    <img className="navPerfil" src="/perfil.svg" alt="perfil" />
                                </IconButton>
                            </a>
                        ) : (
                            <Hidden mdDown>
                                {/* Exibir botões de login e registro apenas em tamanhos de tela maiores */}
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
                                            <Button
                                                id="button-registro"
                                                className="navButton"
                                                color="inherit"
                                                component={Link}
                                                to="/cadastro"
                                            >
                                                <h3>Registre-se</h3>
                                            </Button>
                                        </a>
                                    </Grid>
                                </Grid>
                            </Hidden>
                        )}
                    </Grid>
                </Grid>
            </Toolbar>
            {renderMenu}
        </AppBar>
    );
};

export default Navbar;