import * as React from 'react';
import "./cardPost.css"
import Button from "../button/index"

interface IProps{
  width: any,
  height: any,
  image: string,
  text: string,
  userName: string
}

function cardPost({width, height, text, image, userName}: IProps) {
  return (
    <>
      <div className='div-card' style={{
            width: width,
            height: height
      }}>
        <div className='div-perfil'>
            <img src={image} alt="" />
            <h3>{userName}</h3>
        </div> 
        <div className='div-divider'>
         <hr />
        </div>
        <div className='div-text'>
            <p>{text}</p>
        </div>
        <div className='div-buttons'>
            <Button name='Editar' width={80} height={30} textColor='white' backgroundColor='#089C17' />
            <Button name='Excluir' width={80} height={30} textColor='white' backgroundColor='#9C1A08' />
        </div>
      </div>
    </>
  );
}

export default cardPost;