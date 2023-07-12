import React from 'react';
import Navbar from '../../components/navbar';
import Button from '../../components/button/index';
import CriarPostagemModal from '../../components/Modal';
import CardPost from '../../components/cardPost/index'
import "./post.css"

const Postagens = () => {
  return (
    <div>
      <Navbar autenticacao={true} />
      <div className="buttons-postt">
          <Button textColor='white' height={50} width={250} name="Todas Postagens" />
          <Button textColor='white' height={50} width={250} name="Minhas Postagens" />
          <CriarPostagemModal />
      </div>
      <br />
        <CardPost width={400} height={250} image='/perfil.svg' text='conteudo da sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssspostagem' userName='User Name' />

    </div>
  );
};

export default Postagens;