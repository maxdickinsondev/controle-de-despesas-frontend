import React, { useState, useEffect } from 'react';
import { FaPowerOff, FaCreditCard } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Container, Welcome, Header, Register,
    HeaderInfo, Logout, DespesasInfo, Expenses,
    Dweller, ExpenseName, Value, Date, Description,
    Payment, PayButton
} from './styles';

import api from '../../services/api';

export default function Despesas() {
    const dwellerName = localStorage.getItem('dwellerName');

    const [expenses, setExpenses] = useState([]);
    
    useEffect(() => {
        async function loadExpenses() {
            try {
                const response = await api.get('/unpaidAll');

                setExpenses(response.data);
            } catch (error) {
                toast.error('Erro ao carregar as depesas.');
            }
        }

        loadExpenses();
    }, [expenses]);

    async function handlePayment(id) {
        try {
            await api.put(`/expenses/${id}`);
            toast.error('Pagamento confirmado.');
        } catch (error) {
            toast.error('Erro ao confirmar pagamento.');
        }
    }
    
    return (
        <Container>
            <HeaderInfo>
                <Welcome>{`Bem-vindo, ${dwellerName}!`}</Welcome>

                <Header>
                    <Register to="/newdespesa">
                        Cadastrar nova despesa
                    </Register>
                    
                    <Logout to="/">
                        <FaPowerOff size={30} color="#E02041" />
                    </Logout>
                </Header>
            </HeaderInfo>

            <DespesasInfo>
                <Expenses>
                    {expenses.map(exp => (
                        <li>
                            <Payment>
                                <Dweller> {exp.name} </Dweller>
                                
                                <PayButton type="button" onClick={() => handlePayment(exp.expensesId)}>
                                    <FaCreditCard size={20} color="#000"/>
                                </PayButton>
                            </Payment>
                            
                            <Description>Despesa:</Description>
                            <ExpenseName>{exp.title}</ExpenseName>

                            <Description>Valor:</Description>
                            <Value>R$ {exp.value} </Value>

                            <Description>Vencimento:</Description>
                            <Date> {exp.date} </Date>
                        </li>
                    ))}
                </Expenses>
            </DespesasInfo>
        </Container>
    );
}