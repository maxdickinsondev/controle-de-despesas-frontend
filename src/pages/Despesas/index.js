import React, { useState } from 'react';
import { FaPowerOff, FaCreditCard } from 'react-icons/fa';

import { Container, Welcome, Header, Register,
    HeaderInfo, Logout, DespesasInfo, Expenses,
    Dweller, ExpenseName, Value, Date, Description,
    Payment, Pay
} from './styles';

import api from '../../services/api';

export default function Despesas() {
    const dwellerName = localStorage.getItem('dwellerName');
    
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
                    <li>
                        <Payment>
                            <Dweller>Max</Dweller>
                            
                            <Pay>
                                <FaCreditCard size={20} color="#000"/>
                            </Pay>
                        </Payment>
                        
                        <Description>Despesa:</Description>
                        <ExpenseName>Aluguel</ExpenseName>

                        <Description>Valor:</Description>
                        <Value>R$ 75,00</Value>

                        <Description>Vencimento:</Description>
                        <Date>04/05</Date>
                    </li>

                    <li>
                        <Payment>
                            <Dweller>Max</Dweller>
                            
                            <Pay>
                                <FaCreditCard size={20} color="#000"/>
                            </Pay>
                        </Payment>
                        
                        <Description>Despesa:</Description>
                        <ExpenseName>Aluguel</ExpenseName>

                        <Description>Valor:</Description>
                        <Value>R$ 75,00</Value>

                        <Description>Vencimento:</Description>
                        <Date>04/05</Date>
                    </li>

                    <li>
                        <Payment>
                            <Dweller>Max</Dweller>
                            
                            <Pay>
                                <FaCreditCard size={20} color="#000"/>
                            </Pay>
                        </Payment>
                        
                        <Description>Despesa:</Description>
                        <ExpenseName>Aluguel</ExpenseName>

                        <Description>Valor:</Description>
                        <Value>R$ 75,00</Value>

                        <Description>Vencimento:</Description>
                        <Date>04/05</Date>
                    </li>

                    <li>
                        <Payment>
                            <Dweller>Max</Dweller>
                            
                            <Pay>
                                <FaCreditCard size={20} color="#000"/>
                            </Pay>
                        </Payment>
                        
                        <Description>Despesa:</Description>
                        <ExpenseName>Aluguel</ExpenseName>

                        <Description>Valor:</Description>
                        <Value>R$ 75,00</Value>

                        <Description>Vencimento:</Description>
                        <Date>04/05</Date>
                    </li>

                    <li>
                        <Payment>
                            <Dweller>Max</Dweller>
                            
                            <Pay>
                                <FaCreditCard size={20} color="#000"/>
                            </Pay>
                        </Payment>
                        
                        <Description>Despesa:</Description>
                        <ExpenseName>Aluguel</ExpenseName>

                        <Description>Valor:</Description>
                        <Value>R$ 75,00</Value>

                        <Description>Vencimento:</Description>
                        <Date>04/05</Date>
                    </li>

                    <li>
                        <Payment>
                            <Dweller>Max</Dweller>
                            
                            <Pay>
                                <FaCreditCard size={20} color="#000"/>
                            </Pay>
                        </Payment>
                        
                        <Description>Despesa:</Description>
                        <ExpenseName>Aluguel</ExpenseName>

                        <Description>Valor:</Description>
                        <Value>R$ 75,00</Value>

                        <Description>Vencimento:</Description>
                        <Date>04/05</Date>
                    </li>

                    <li>
                        <Payment>
                            <Dweller>Max</Dweller>
                            
                            <Pay>
                                <FaCreditCard size={20} color="#000"/>
                            </Pay>
                        </Payment>
                        
                        <Description>Despesa:</Description>
                        <ExpenseName>Aluguel</ExpenseName>

                        <Description>Valor:</Description>
                        <Value>R$ 75,00</Value>

                        <Description>Vencimento:</Description>
                        <Date>04/05</Date>
                    </li>

                    <li>
                        <Payment>
                            <Dweller>Max</Dweller>
                            
                            <Pay>
                                <FaCreditCard size={20} color="#000"/>
                            </Pay>
                        </Payment>
                        
                        <Description>Despesa:</Description>
                        <ExpenseName>Aluguel</ExpenseName>

                        <Description>Valor:</Description>
                        <Value>R$ 75,00</Value>

                        <Description>Vencimento:</Description>
                        <Date>04/05</Date>
                    </li>
                </Expenses>
            </DespesasInfo>
        </Container>
    );
}