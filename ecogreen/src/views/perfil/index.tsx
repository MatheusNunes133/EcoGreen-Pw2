import { Grid } from '@mui/material';
import Input from '../../components/input';
import Button from '../../components/button';
import './perfil.css';
import Navbar from '../../components/navbar';
import AuthAvatar from '../../components/avatar';
import { useEffect, useState } from 'react';
import { api } from "../../service/Api"
import { Notify, notifyError, notifySuccess } from "../../components/NotiFy"

const Perfil = () => {

    const [newUsername, setNewUsername] = useState("")
    const [newName, setNewName] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newPerfil, setNewPerfil] = useState()

    const [userName, setUsername] = useState("")
    const [name, setName] = useState("")
    const [perfil, setPerfil] = useState()

    useEffect(() => {
        (async () => {
            const token: string | null = JSON.parse(localStorage.getItem("tokenJWT") || "null");
            let result = await api.get("/user/perfil", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (result.status == 200) {
                setUsername(result.data.username)
                setName(result.data.name)
                setPerfil(result.data.imageBase64)
            }
            console.log(result.data)
        })()
    }, [])

    const updatePerfil = async (): Promise<void> => {
        const formData = new FormData();
        formData.append("username", newUsername);
        formData.append("name", newName);
        formData.append("password", newPassword);
        formData.append("image", newPerfil)
        const token: string | null = JSON.parse(localStorage.getItem("tokenJWT") || "null");
        const response = await api.put("/user/update-user", formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        });
        if (response.status == 200) {
            notifySuccess(response.data)
        } else {
            notifyError(response.data)
        }
    };


    return (
        <div>
            <Notify />
            <Navbar autenticacao={false} />
            <div className="conteudo">
                <Grid container direction="column" alignItems="center" spacing={1}>
                    <AuthAvatar autenticacao={true} image={perfil} />
                    <Grid item>
                        {name}
                    </Grid>
                    <Grid item className="input-container">
                        <Input value={userName} placeholder="Username" width={369} height={62} onChangeFunction={() => setNewUsername(event.target.value)} />
                    </Grid>
                    <Grid item className="input-container">
                        <Input value={name} placeholder="Nome" width={369} height={62} onChangeFunction={() => setNewName(event.target.value)} />
                    </Grid>
                    {/*                     <Grid item className="input-container">
                        <Input placeholder="Senha Atual" width={369} height={62} />
                    </Grid> */}
                    <Grid item className="input-container">
                        <Input placeholder="Nova senha" width={369} height={62} onChangeFunction={() => setNewPassword(event.target.value)} />
                    </Grid>
                    <Grid item className="input-container">
                        <Input inputType="file" placeholder="Perfil" width={369} height={62} onChangeFunction={() => setNewPerfil(event.target.files[0])} />
                    </Grid>
                    <Grid item>
                        <Button textColor="white" width={369} height={50} name="Salvar" login={() => updatePerfil()} />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Perfil;