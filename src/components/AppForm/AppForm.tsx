import React from 'react';
import styled from 'styled-components';
import { AppHeader } from '../AppHeader';
import { AppInput } from '../AppInput';

export const AppForm = () => {
    return (
        <Container>
            <AppHeader title="Sign in" />
            <form>
                <AppInput />
                <AppInput />
            </form>
        </Container>
    );
};

const Container = styled.div``;
