import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, LoginInfo, NameApp, Form,
    LoginInput, PassInput, ButtonSubmit, SigInfo, 
    SignIn, NameInput
} from './styles';

export default function Cadastro() {
    return (
        <Container>
            <NameApp>PoupeMax</NameApp>

            <Form>
                <NameInput 
                    placeholder="Usuário"
                />

                <LoginInput 
                    placeholder="E-mail"
                />

                <PassInput 
                    placeholder="Password"
                /> 

                <ButtonSubmit> Cadastrar </ButtonSubmit> 
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