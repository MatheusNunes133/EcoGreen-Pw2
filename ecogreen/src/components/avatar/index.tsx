import React from 'react';
import { Avatar, Grid } from '@mui/material';

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

const AvatarImage: React.FC<AvatarProps> = ({ src, alt, size = 70 }) => {
  return (
    <Avatar src={src} alt={alt} sx={{ width: size, height: size }} />
  );
};

interface Props {
  autenticacao: boolean;
}

const AuthAvatar: React.FC<Props> = ({ autenticacao }) => {
  return (
    <>
      {autenticacao ? (
        <a href="/perfil">
          <Grid item container justifyContent="flex-end">
            <img className='navPerfil' src="/vite.svg" />
          </Grid>
        </a>
      ) : (
        <Grid item className='perfilimg'>
          <AvatarImage src={'perfilpequeno.jpg'} alt={'perfil'} />
        </Grid>
      )}
    </>
  );
};

export default AuthAvatar;