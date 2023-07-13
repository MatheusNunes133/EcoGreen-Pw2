import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import Button from '../../components/button/index';
import CriarPostagemModal from '../../components/Modal';
import CardPost from '../../components/cardPost/index'
import "./post.css"
import { api } from '../../service/Api';

const Postagens = () => {
  const [AllPosts, setAllPosts] = useState<any[]>([])

  useEffect(() => {
    (async () => {
      const token: string | null = JSON.parse(localStorage.getItem("tokenJWT") || "null");
      let posts = await api.get("/post/get-posts", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setAllPosts(posts.data.content)
      console.log(posts.data.content)
    })()
  }, [])

  return (
    <div>
      <Navbar autenticacao={true} />
      <div className="buttons-postt">
        <a href="/todaspostagens"><Button textColor='white' height={50} width={250} name="Todas Postagens" /></a>
        <a href="/postagens"><Button textColor='white' height={50} width={250} name="Minhas Postagens" /></a>
        <CriarPostagemModal />
      </div>
      <br />
      <div className="containerPosts">
        {
          AllPosts.map(item => {
            return (
              <CardPost width={400} height={250} image={item.user.perfil} text={item.message} userName={item.user.name} autenticacao={false} />

            )
          })
        }
      </div>

    </div>
  );
};

export default Postagens;
