import React, { useState } from 'react';
import Button from '../../components/button/index';
import { Modal, TextField, Box, Typography } from '@mui/material';
import './index.css'
import { api } from '../../service/Api';

const token: string | null = JSON.parse(localStorage.getItem("tokenJWT") || "null");

const CriarPostagemModal: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [message, setConteudo] = useState('');
    const [title, setTitulo] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setConteudo('');
        setOpen(false);
    };

    async function postCreate() {
        const result = await api.post("/post/create-post", {
          message: message,
          title: title
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setTimeout(() => {
            window.location.reload();
            navigate("/postagens");
          }, 200);
      
        if (result.status === 200) {
          notifySuccess(result.data.success);
        } else {
          notifyError(result.data);
        }
      }

     
    
    return (
        <div>
            <div onClick={handleOpen}>
                <Button textColor='white' backgroundColor='none' name={'Criar Postagem'} height={50} width={250} />
            </div>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        maxWidth: 400,
                        width: '100%',
                        outline: 'none',
                    }}
                >
                    <Typography variant="h6" component="h2" align="center">
                        Criar Postagem
                    </Typography>
                    <form onSubmit={handleSubmit}>
                    <TextField
                            label="Um bom titulo aqui"
                            fullWidth
                            multiline
                            rows={1}
                            margin="normal"
                            onChange={(event) => setTitulo(event.target.value)}
                        />
                        <TextField
                            label="Como vai o meio ambiente?"
                            fullWidth
                            multiline
                            rows={4}
                            margin="normal"
                            onChange={(event) => setConteudo(event.target.value)}
                        />
                        <div className='buttons-modal'>
                            <div onClick={handleClose}>
                                <Button textColor='white' backgroundColor='#9C1A08' name={'Fechar'} height={40} width={100} />
                            </div>
                            <Button login={() => postCreate()} textColor='white' name={'Publicar'} height={40} width={100} />
                        </div>

                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default CriarPostagemModal;

function notifySuccess(success: any) {
    throw new Error('Function not implemented.');
}


function notifyError(data: any) {
    throw new Error('Function not implemented.');
}
