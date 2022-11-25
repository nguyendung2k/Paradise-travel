import { AppForm } from '@/components/AppForm';
import React from 'react';
import styled from 'styled-components';
import imageUrl from '../../../assets/images';

const Login = () => (
    <Wrapper>
        <Form>
            <AppForm />
        </Form>
        <BackgroundImage background={imageUrl.auth} />
    </Wrapper>
);

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    /* background-color: red; */
`;

const Form = styled.div`
    width: 40vw;
    height: 100%;
    /* background-color: #7b7b95; */
`;

const BackgroundImage = styled.div<{
    background: string;
}>`
    width: 60vw;
    height: 100%;
    background-image: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-size: cover;
`;

export default Login;
