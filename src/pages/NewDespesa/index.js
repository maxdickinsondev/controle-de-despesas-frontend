import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Screen, Form,
    ValueInput, DateInput, ButtonSubmit, SigInfo, 
    SignIn, NameInput, DwellerInput
} from './styles';

export default function CadastroDespesa() {
    return (
        <Container>
            <Screen>Cadastrar despesa</Screen>

            <Form>
                <DwellerInput 
                    placeholder="ID do morador"
                />

                <NameInput 
                    placeholder="Nome da despesa"
                />

                <ValueInput 
                    placeholder="Valor da despesa"
                />

                <DateInput 
                    placeholder="Data de vencimento"
                /> 

                <ButtonSubmit> Adicionar Despesa</ButtonSubmit> 
            </Form>

            <SigInfo>
                <FiArrowLeft size={20} color="#E49722" />
                
                <SignIn to="/despesas">
                    Votlar pra tela principal
                </SignIn>
            </SigInfo>
        </Container>
    );
}