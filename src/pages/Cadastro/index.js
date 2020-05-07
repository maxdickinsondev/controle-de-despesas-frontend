import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { Container, NameApp, Form,
    LoginInput, PassInput, ButtonSubmit, SigInfo, 
    SignIn, NameInput
} from './styles';

import api from '../../services/api';

export default function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleDweler(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            password
        };

        try {
            await api.post('/dweller', data);
            toast.error('Cadastro realizado com sucesso.');

            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            toast.error('Erro ao realizar cadastro.');
        }
    }

    return (
        <Container>
            <NameApp>PoupeMax</NameApp>

            <Form onSubmit={(e) => handleDweler(e)}>
                <NameInput 
                    placeholder="Usuário"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <LoginInput 
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <PassInput 
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                /> 

                <ButtonSubmit type="submit"> Cadastrar </ButtonSubmit> 
            </Form>

            <SigInfo>
                <FiArrowLeft size={20} color="#E49722" />
                
                <SignIn to="/">
                    Votlar pra home
                </SignIn>
            </SigInfo>
        </Container>
    );
}