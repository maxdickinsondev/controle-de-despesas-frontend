import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    max-width: 1220px;
    min-width: 1200px;
`;

export const Welcome = styled.h3`
    margin-left: 30px;
    font-size: 24px;
    color: #E49722;
`;

export const HeaderInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.1);
    height: 70px;
    margin-bottom: 50px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    margin-right: 25px;
`;

export const Register = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    font-size: 14px;
    width: 230px;
    height: 35px;
    background: #E49722;
    border-radius: 4px;
    border: 1px solid #E49722;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
`;

export const Logout = styled(Link)`

`;

export const DespesasInfo = styled.div`
    
`;

export const Expenses = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    li {
        display: flex;
        flex-direction: column;
        margin: 10px;
        background: #fff;
        max-width: 300px;
        min-height: 230px;
        border-radius: 4px;
    }
`;

export const Value = styled.span`
    margin-bottom: 10px;
    margin-left: 10px;
    color: #CCC;
`;

export const Dweller = styled.span`
    margin-bottom: 40px;
    margin: 10px;
    color: #E49722;
    font-size: 18px;
    font-weight: bold;
`;

export const ExpenseName = styled.span`
    margin-bottom: 10px;
    margin-left: 10px;
    color: #CCC;
`;

export const Date = styled.span`
    margin-bottom: 10px;
    margin-left: 10px;
    color: #CCC;
`;

export const Description = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 10px;
    margin-left: 10px;
`;

export const Payment = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
`;

export const Pay = styled(Link)`
    
`;