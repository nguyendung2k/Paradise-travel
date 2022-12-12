import { AppButton, AppHeader, AppInput } from '@/components';
import { IconFaceBook } from '@/components/AppIcons/AppIcons';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Form>
                <div style={{ width: '350px', marginTop: '100px' }}>
                    <AppHeader
                        title="Register"
                        description="Welcome to NgaoduVietnam"
                        descriptionForm
                    />
                    <div style={{ marginTop: '65px' }}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ flex: 1 }}>
                                <AppInput width={90} typeInput="register" label="First Name" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <AppInput width={100} typeInput="register" label="Last Name" />
                            </div>
                        </div>
                        <AppInput type="email" typeInput="email" label="Email Address" />
                        <AppInput type="password" typeInput="password" label="Password" />
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
                            Member already?
                            <AppButton
                                onCLick={() => navigate('/auth')}
                                title="Log in"
                                type="login"
                            />
                        </TextFooter>
                    </FormFooter>
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

export default Register;
