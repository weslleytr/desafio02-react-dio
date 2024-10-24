import React from 'react'
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture
} from './styles';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='logo da dio' />
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
              {autenticado ? (
                <UserPicture src='https://avatars.githubusercontent.com/u/116997181?s=400&u=0eb407445e72fa3943e883d2b3e51ada27112852&v=4'/>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
              </>)}
          </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }; 