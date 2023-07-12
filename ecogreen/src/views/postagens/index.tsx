import React from 'react';
import Navbar from '../../components/navbar';
import Button from '../../components/button/index';
import CriarPostagemModal from '../../components/Modal';

const Postagens = () => {
  return (
    <div>
      <Navbar />
      <div className="buttons">
        <h2>
          <Button height={50} width={369} name="Todas Postagens" />
        </h2>
        <h2>
          <Button height={50} width={369} name="Minhas Postagens" />
        </h2>
        <h2>
          <CriarPostagemModal />
        </h2>
      </div>
    </div>
  );
};

export default Postagens;