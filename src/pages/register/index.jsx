import { MdEmail, MdLock, MdAccountBox } from 'react-icons/md'
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from '../../services/api';
import { Column, Container, LoginText, Row, SubtitleLogin, Title, TitleLogin, Wrapper, TopLoginText, ComumText } from "./styles";

const schema = yup.object({
    name:  yup.string().label('').required('Campo Obrigatório'),
    email: yup.string().email('E-mail não é valido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
  }).required();

const Register = () => {
    const { control, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    

    const onSubmit = async (data) => {
        try {
            const response = await api.get('http://localhost:8001/users');
            const existingUsers = Array.isArray(response.data) ? response.data : response.data.users; 
            const emailExists = existingUsers.some(user => user.email === data.email);

            if (emailExists) {
                setError('email', {
                    type: 'manual',
                    message: 'Este e-mail já está cadastrado.',
                });
                return;
            }

            const nextId = existingUsers.length > 0 ? Math.max(...existingUsers.map(user => user.id)) + 1 : 1;

            const userWithId = { ...data, id: nextId };

            const createResponse = await api.post('http://localhost:8001/users', userWithId);
            console.log('Usuário criado com sucesso:');

        } catch (error) {
            console.error('Erro ao verificar ou criar usuário:', error);
        }
    };
  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate('/login');
  };
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <Wrapper>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome" leftIcon={<MdAccountBox />}/>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Criar minha conta" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <TopLoginText>Ao clicar em "criar minha conta grátis" declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TopLoginText>
                    </Row>
                    <Row>
                        <ComumText>Já tenho conta.</ComumText>
                        <LoginText onClick={handleClickLogin}>Fazer Login</LoginText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
        </>)
}

export { Register }