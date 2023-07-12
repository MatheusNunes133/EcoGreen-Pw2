import Navbar from "../../components/navbar"
import Card from "../../components/card"
import "./home.css"

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className="content">
                <Card widthImage={900} width={400} height={180} text="Fala-se tanto da necessidade de deixar um planeta melhor para os nossos filhos e esquece-se da urgência de deixarmos filhos melhores para o nosso planeta." image="/1.jpg" />
                <Card widthImage={1050} width={400} height={180} text="O laço essencial que nos une é que todos habitamos este pequeno planeta. Todos respiramos o mesmo ar. Todos nos preocupamos com o futuro dos nossos filhos. E todos" image="/2.jpg" />
                <Card widthImage={1200} width={400} height={180} text="Neste mundo moderno, onde impera a pressa e a tecnologia, as belezas naturais estão passando despercebidas. Mude um pouco isso, veja a noite as estrelas e o luar; encante-se com a bela imagem de um por do sol." image="/3.jpg" />
                <Card widthImage={850} width={400} height={180} text="⁠Não podemos pensar em desenvolvimento econômico, reduzir as desigualdades sociais e em qualidade de vida sem discutirmos meio ambiente." image="/4.jpg" />
            </div>
           
        </div>
    )
}

export default Home;