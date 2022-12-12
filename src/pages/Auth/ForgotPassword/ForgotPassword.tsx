import { AppButton, AppHeader, AppInput } from '@/components';
import { IconFaceBook } from '@/components/AppIcons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ForgotPassword = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Form>
                <div style={{ width: '420px', marginTop: '100px' }}>
                    <AppHeader
                        title="Forgot Password"
                        description="Enter the e-mail address associated with the account. We'll e-mail a link to reset your password."
                        descriptionForm
                    />
                    <div style={{ marginTop: '65px', width: '350px' }}>
                        <AppInput type="email" typeInput="email" label="Email Address" />
                        <AppButton
                            borderColor="#FF7B42"
                            type="signin"
                            backgroundColor="#FF7B42"
                            title="Send Request"
                            // border="none"
                        />
                        <AppButton
                            type="backToSignIn"
                            title="Back to sign in"
                            backgroundColor="#fff"
                            // border={1}
                            borderColor="#FF7B42"
                            onCLick={() => navigate('/auth')}
                        />
                    </div>
                </div>
            </Form>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
`;

const Form = styled.form`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* background-color: #7b7b95; */
`;

const FormFooter = styled.div`
    margin-top: 30px;
`;

const TextFooter = styled.p`
    display: flex;
    align-items: center;
`;
export default ForgotPassword;
