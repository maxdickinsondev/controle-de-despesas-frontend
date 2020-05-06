import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Container, NameApp, Form,
    LoginInput, PassInput, ButtonSubmit, SigInfo, 
    SignIn,
} from './styles';

export default function Login() {
    const history = useHistory();

    function handleExpenses() {
        history.push('/despesas');
    }

    return (
        <Container>
            <NameApp>PoupeMax</NameApp>

            <Form onSubmit={handleExpenses}>
                <LoginInput 
                    placeholder="E-mail"
                />

                <PassInput 
                    placeholder="Password"
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