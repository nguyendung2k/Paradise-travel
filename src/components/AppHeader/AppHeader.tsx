import React from 'react';
import { Header } from './type';
import styled from 'styled-components';

export const AppHeader = ({ title, size, descriptionForm, description }: Header) => {
    return (
        <>
            <HeaderForm size={size}>{title}</HeaderForm>
            {descriptionForm && <DescriptionForm>{description}</DescriptionForm>}
        </>
    );
};

const HeaderForm = styled.h1<{
    size?: number;
}>`
    font-size: 48px;
    font-weight: 500;
    margin-bottom: 15px;
`;

const DescriptionForm = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #3d3e3f;
    line-height: 1.25;
`;
