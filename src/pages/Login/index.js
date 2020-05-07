import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Container, NameApp, Form,
    LoginInput, PassInput, ButtonSubmit, SigInfo, 
    SignIn,
} from './styles';

import api from '../../services/api';
import { toast } from 'react-toastify';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        const data = {
            email,
            password
        };

        try {
            const response = await api.post('/login', data);
            localStorage.setItem('dwellerName', response.data.name);
            history.push('/despesas');
        } catch (error) {
            toast.error('Tente novamente mais tarde!');
        }
    }

    return (
        <Container>
            <NameApp>PoupeMax</NameApp>

            <Form onSubmit={(e) => handleLogin(e)}>
                <LoginInput 
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <PassInput 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                /> 

                <ButtonSubmit type="submit" > Entrar </ButtonSubmit> 
            </Form>

            <SigInfo>
                <FiLogIn size={20} color="#E49722" />
                
                <SignIn to="/cadastro">
                    Não tenho cadastro
                </SignIn>
            </SigInfo>
        </Container>
    );
}