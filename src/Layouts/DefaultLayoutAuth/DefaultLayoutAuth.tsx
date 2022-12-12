import { background } from '../../assets/images/index';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
export const DefaultLayoutAuth = () => {
    return (
        <Layout>
            <Outlet />
            <BackgroundImage background={background} />
        </Layout>
    );
};

const Layout = styled.div`
    display: flex;
`;

const BackgroundImage = styled.div<{
    background: string;
}>`
    width: 60%;
    height: 100vh;
    width: 60vw;
    background-image: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-size: cover;
`;
