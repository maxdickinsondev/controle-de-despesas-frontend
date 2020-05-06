import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, LoginInfo, NameApp, Form, LoginInput, PassInput,
    ButtonSubmit, SigInfo, SignIn
} from './styles';

export default function Login() {
    return (
        <Container>
            <LoginInfo>
                <NameApp>PoupeMax</NameApp>

                <Form>
                    <LoginInput 
                        placeholder="E-mail"
                    />

                    <PassInput 
                        placeholder="Password"
                    /> 

                    <ButtonSubmit> Entrar </ButtonSubmit> 
                </Form>

                <SigInfo>
                    <FiLogIn size={20} color="#E49722" />
                    
                    <SignIn>
                        Não tenho cadastro
                    </SignIn>
                </SigInfo>
            </LoginInfo>
        </Container>
    );
}