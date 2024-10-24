import { Link } from "react-router-dom";
import bannerImage from "../../assets/banner.png"
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
    return (<>
    <Header autenticado={true}/>
    <Container>
        <Column flex={3}>
        <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Column>
        <Column flex={1}>
            <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
            <UserInfo percentual={80} nome="Weslley Trindade" image='https://avatars.githubusercontent.com/u/116997181?s=400&u=0eb407445e72fa3943e883d2b3e51ada27112852&v=4'/>
            <UserInfo percentual={30} nome="Weslley Trindade" image='https://avatars.githubusercontent.com/u/116997181?s=400&u=0eb407445e72fa3943e883d2b3e51ada27112852&v=4'/>
            <UserInfo percentual={25} nome="Weslley Trindade" image='https://avatars.githubusercontent.com/u/116997181?s=400&u=0eb407445e72fa3943e883d2b3e51ada27112852&v=4'/>
            <UserInfo percentual={55} nome="Weslley Trindade" image='https://avatars.githubusercontent.com/u/116997181?s=400&u=0eb407445e72fa3943e883d2b3e51ada27112852&v=4'/>
            <UserInfo percentual={70} nome="Weslley Trindade" image='https://avatars.githubusercontent.com/u/116997181?s=400&u=0eb407445e72fa3943e883d2b3e51ada27112852&v=4'/>
            <UserInfo percentual={10} nome="Weslley Trindade" image='https://avatars.githubusercontent.com/u/116997181?s=400&u=0eb407445e72fa3943e883d2b3e51ada27112852&v=4'/>
        </Column>
    </Container>
    </>)
}

export { Feed }