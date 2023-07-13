import * as React from 'react';
import "../cardPost/cardPost.css"
import Button from "../button/index"
import EditarPostagemModal from '../ModalEdit/EditPost';
import axios from 'axios';
import { notifyError, notifySuccess } from '../NotiFy';

interface IProps {
  width: any,
  height: any,
  image: string,
  text: string,
  userName: string,
  autenticacao: boolean
}

function cardPost({ width, height, text, image, userName, autenticacao }: IProps) {
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
        <div className='div-divider'>
          <hr />
        </div>
        <div className='div-text'>
          <p>{text}</p>
        </div>
        {autenticacao ?
          <div className='div-buttons'>
            <EditarPostagemModal />
            <Button name='Excluir' width={80} height={30} textColor='white' backgroundColor='#9C1A08' />

          </div>
          :
          <div></div>
        }

      </div>
    </>
  );
}

export default cardPost;