import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { Container, Screen, Form,
    ValueInput, DateInput, ButtonSubmit, SigInfo, 
    SignIn, NameInput, DwellerInput
} from './styles';

import api from '../../services/api';

export default function CadastroDespesa() {
    const [dwellerId, setDwellerId] = useState('');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [date, setDate] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            title,
            value,
            date,
            dwellerId
        }
        
        try {
            await api.post('expenses', data);
            toast.error('Despesa cadastrada com sucesso!');

            setDwellerId('');
            setTitle('');
            setValue('');
            setDate('');
        } catch (error) {
            toast.error('Erro no cadastro, tente mais tarde');
        }
    }

    return (
        <Container>
            <Screen>Cadastrar despesa</Screen>

            <Form onSubmit={(e) => handleSubmit(e)}>
                <DwellerInput 
                    placeholder="ID do morador"
                    value={dwellerId}
                    onChange={e => setDwellerId(e.target.value)}
                />

                <NameInput 
                    placeholder="Nome da despesa"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <ValueInput 
                    placeholder="Valor da despesa"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />

                <DateInput 
                    placeholder="Data de vencimento"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                /> 

                <ButtonSubmit type="submit"> Adicionar Despesa</ButtonSubmit> 
            </Form>

            <SigInfo>
                <FiArrowLeft size={20} color="#E49722" />
                
                <SignIn to="/despesas">
                    Voltar pra tela principal
                </SignIn>
            </SigInfo>
        </Container>
    );
}