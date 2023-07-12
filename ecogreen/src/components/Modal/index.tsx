import React, { useState } from 'react';
import Button from '../../components/button/index';
import { Modal, TextField, Box, Typography } from '@mui/material';
import './index.css'

const CriarPostagemModal: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [conteudo, setConteudo] = useState('');

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
                            label="Como vai o meio ambiente?"
                            fullWidth
                            multiline
                            rows={4}
                            margin="normal"
                            value={conteudo}
                            onChange={(event) => setConteudo(event.target.value)}
                        />
                        <div className='buttons-modal'>
                            <div onClick={handleClose}>
                                <Button textColor='white' backgroundColor='#9C1A08' name={'Fechar'} height={40} width={100} />
                            </div>
                            <Button textColor='white' name={'Publicar'} height={40} width={100} />
                        </div>

                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default CriarPostagemModal;