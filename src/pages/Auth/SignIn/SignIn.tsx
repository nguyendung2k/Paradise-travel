import { AppButton, AppHeader, AppInput } from '@/components';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IconFaceBook } from '@/components/AppIcons';

const SignIn = () => {
    const navigate = useNavigate();
    return (
        <>
            <Wrapper>
                <Form>
                    <div style={{ width: '350px', marginTop: '100px' }}>
                        <AppHeader
                            title="Sign in"
                            description="Welcome to NgaoduVietnam"
                            descriptionForm
                        />
                        <div style={{ marginTop: '65px' }}>
                            <AppInput type="email" typeInput="email" label="Email Address" />
                            <AppInput type="password" typeInput="password" label="Password" />
                            <AppButton
                                onCLick={() => navigate('/auth/forgotpassword')}
                                title="Forgot password?"
                                type="forgot"
                            />
                            <AppButton type="signin" backgroundColor="#FF7B42" title="Sign in" />
                            <AppButton
                                type="signinwithfacebook"
                                backgroundColor="#4E86DB"
                                title="Sign in with Facebook"
                                Icon={<IconFaceBook />}
                            />
                        </div>
                        <FormFooter>
                            <TextFooter>
                                Don’t have an account?{' '}
                                <AppButton
                                    onCLick={() => navigate('/auth/register')}
                                    title="Sign up"
                                    type="signup"
                                />
                            </TextFooter>
                        </FormFooter>
                    </div>
                </Form>
            </Wrapper>
        </>
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

export default SignIn;
