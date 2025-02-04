import { useNavigate } from "react-router-dom";
import bannerImage from "../../assets/banner.png"
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Container, TextContent, Title, TitleHighLight } from "./styles";

const Home = () => {

    const navigate = useNavigate();

    const handleClickSingIn = () => {
        navigate('/login')
    }

    return (<>
    <Header />
    <Container>
        <div>
            <Title>
                <TitleHighLight>
                    Implemente <br />
                </TitleHighLight>
                o seu futuro global agora!
            </Title>
            <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                desafio profissional, evoluindo em comunidade com os melhores experts.
            </TextContent>
            <Button title="Começar agora" variant="secondary" onClick={handleClickSingIn} />
        </div>
        <div>
            <img src={bannerImage} alt="Imagem Principal" />
        </div>
    </Container>
    </>)
}

export { Home }