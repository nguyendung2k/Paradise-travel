import React from 'react';
import styled from 'styled-components';
import { Input } from './type';

export const AppInput = ({
    placeholder,
    type,
    typeInput,
    label,
    flexDirection = 'column',
    width = 100,
}: Input) => {
    switch (typeInput) {
        case 'email':
            return (
                <BlockInput flexDirection={flexDirection}>
                    <LabelInput>{label}</LabelInput>
                    <InputForm width={width} placeholder={placeholder} type={type} />
                </BlockInput>
            );
        case 'password':
            return (
                <BlockInput flexDirection={flexDirection}>
                    <LabelInputPassword>{label}</LabelInputPassword>
                    <InputForm width={width} placeholder={placeholder} type={type} />
                </BlockInput>
            );
        case 'register':
            return (
                <BlockInput flexDirection={flexDirection}>
                    <LabelInput>{label}</LabelInput>
                    <InputForm width={width} placeholder={placeholder} type={type} />
                </BlockInput>
            );
    }
    return <></>;
};

const LabelInput = styled.label`
    color: #636567;
    font-size: 16px;
`;

const LabelInputPassword = styled.label`
    color: #636567;
    font-size: 14px;
    font-weight: 700;
    margin-top: 10px;
`;

const InputForm = styled.input<{
    width?: any;
}>`
    border: none;
    border-bottom: 1px solid #c5c7c9;
    padding: 5px 0;
    font-size: 14px;
    width: ${(p) => p.width}%;
`;

const BlockInput = styled.div<{
    flexDirection?: string;
}>`
    display: flex;
    flex-direction: ${(p) => p.flexDirection};
    margin-bottom: 10px;
`;
