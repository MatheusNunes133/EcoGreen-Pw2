import React from "react";
import Navbar from "../../components/navbar";
import Button from "../../components/button/index";
import CriarPostagemModal from "../../components/Modal";
import CardPost from "../../components/cardPost/index";
import "../postagens/post.css";

const TodasPostagens = () => {
  return (
    <div>
      <Navbar autenticacao={true} />
      <div className="buttons-postt">
        <a href="/todaspostagens">
          <Button
            textColor="white"
            height={50}   
            width={250}
            name="Todas Postagens"
          />
        </a>
        <a href="/postagens">
          <Button
            textColor="white"
            height={50}
            width={250}
            name="Minhas Postagens"
          />
        </a>
        <CriarPostagemModal />
      </div>
      <br />
      <CardPost
        autenticacao={false}
        width={400}
        height={250}
        image="/perfil.svg"
        text="conteudo da sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssspostagem"
        userName="User Name"
      />
    </div>
  );
};

export default TodasPostagens;
