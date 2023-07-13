import * as React from 'react';
import "../cardPost/cardPost.css"
import Button from "../button/index"
import EditarPostagemModal from '../ModalEdit/EditPost';
import axios from 'axios';
import { notifyError, notifySuccess } from '../NotiFy';
import { api } from '../../service/Api';

interface IProps {
  width: any,
  height: any,
  image: string,
  text: string,
  userName: string,
  autenticacao: boolean,
  id: string,
  title: string
}

function handleDelete() {
  axios.delete('/post/delete-post/')
    .then(response => {
      notifySuccess("Postagem deletada!")
    })
    .catch(error => {
      notifyError("Erro ao excluir postagem")
    });
}

function cardPost({ width, height, text, title, image, userName, autenticacao, id }: IProps) {

  async function deletep(id: any) {
    const token: string | null = JSON.parse(localStorage.getItem("tokenJWT") || "null");
    let result = await api.delete(`/post/delete-post/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    setTimeout(() => {
      window.location.reload();
      navigate("/");
    }, 200);
  }

  return (
    <>
      <div className='div-card' style={{
        width: width,
        height: height
      }}>
        <div className='div-perfil'>
          <img className='img-card-post' src={image == null || undefined ? "/vite.svg" : `data:image/jpeg;base64,${image}`} alt="" />
          <h3>{userName}</h3>
        </div>
        <h3>{title}</h3>
        <div className='div-divider'>
          <hr />
        </div>
        <div className='div-text'>
          <p>{text}</p>
        </div>
        {autenticacao ?
          <div className='div-buttons'>
            {/*<EditarPostagemModal />*/}
            <div className=''>
              <Button name='Excluir' width={80} height={30} textColor='white' backgroundColor='#9C1A08' login={() => deletep(id)} />
            </div>
          </div>
          :
          <div></div>
        }

      </div>
    </>
  );
}

export default cardPost;