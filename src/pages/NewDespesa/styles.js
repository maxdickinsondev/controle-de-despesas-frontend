import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    padding-top: 100px;
    margin: 40px auto;
    max-width: 350px;
    min-height: 530px;
    background: rgba(0, 0, 0, 0.1);
`;

export const Screen = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 250px;
    color: #ccbdbd;
    font-size: 25px;
    line-height: 50px;
    border-top: 2px solid #E49722;
    border-bottom: 2px solid #E49722;
    margin-bottom: 50px;
    margin-left: 50px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const ValueInput = styled.input`
    width: 250px;
    height: 35px;
    margin-bottom: 8px;
    margin-left: 50px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: #fff;
`;

export const DateInput = styled.input`
    width: 250px;
    height: 35px;
    margin-bottom: 40px;
    margin-left: 50px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: #fff;
`;

export const NameInput = styled.input`
    width: 250px;
    height: 35px;
    margin-bottom: 8px;
    margin-left: 50px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: #fff;
`;

export const DwellerInput = styled.input`
    width: 250px;
    height: 35px;
    margin-bottom: 8px;
    margin-left: 50px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: #fff;
`;

export const ButtonSubmit = styled.button`
    width: 250px;
    height: 35px;
    background: #E49722;
    border-radius: 4px;
    border: 1px solid #E49722;
    margin-bottom: 15px;
    margin-left: 50px;
`;

export const SigInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 50px;
`;

export const SignIn = styled(Link)`
    margin-left: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    text-decoration: none;
`;