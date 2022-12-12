import React from 'react';
import styled from 'styled-components';
import { ButtonComponent } from './type';

export const AppButton = ({
    title,
    type,
    backgroundColor = '',
    Icon,
    onCLick,
    border,
    borderColor,
}: ButtonComponent) => {
    return (
        <>
            {type == 'forgot' && (
                <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
                    <ButtonForgotPassWord onClick={onCLick}>{title}</ButtonForgotPassWord>
                </div>
            )}

            {type == 'signin' && (
                <CenterButtonForm>
                    <ButtonForm
                        borderColor={borderColor}
                        // border={border}
                        backgroundColor={backgroundColor}
                    >
                        {title}
                    </ButtonForm>
                </CenterButtonForm>
            )}
            {type == 'backToSignIn' && (
                <CenterButtonForm>
                    <ButtonForm
                        borderColor={borderColor}
                        border={border}
                        backgroundColor={backgroundColor}
                        onClick={onCLick}
                    >
                        <p style={{ color: '#FF7B42', fontWeight: '700', fontSize: '14px' }}>
                            {title}
                        </p>
                    </ButtonForm>
                </CenterButtonForm>
            )}
            {type == 'signinwithfacebook' && (
                <CenterButtonForm>
                    <ButtonForm backgroundColor={backgroundColor}>
                        {Icon}
                        <p style={{ marginLeft: '10px' }}>{title}</p>
                    </ButtonForm>
                </CenterButtonForm>
            )}
            {type == 'signup' && <ButtonSignUp onClick={onCLick}>{title}</ButtonSignUp>}
            {type == 'login' && <ButtonSignUp onClick={onCLick}>{title}</ButtonSignUp>}
        </>
    );
};

const ButtonForgotPassWord = styled.a`
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
`;

const ButtonSignUp = styled.a`
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    color: #ff7b42;
    margin-left: 10px;
`;

const ButtonForm = styled.button<{ backgroundColor: string; border?: any; borderColor?: string }>`
    background-color: ${(p) => p.backgroundColor};
    /* border: ${(p) => p.border}; */
    border: 1px solid;
    border-color: ${(p) => p.borderColor};
    color: white;
    padding-top: 17px;
    padding-bottom: 17px;
    width: 100%;
    text-align: center;
    text-decoration: none;
    display: inline-flex;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    opacity: 1;
    & :hover {
        opacity: 0.8;
    }
`;

const CenterButtonForm = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: center;
    & :hover {
        opacity: 0.8;
    }
`;
