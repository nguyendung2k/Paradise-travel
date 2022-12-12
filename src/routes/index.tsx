import { DefaultLayoutAuth } from '@/Layouts';
import { ForgotPassword, Home, Register, SignIn } from '@/pages';

import { createBrowserRouter } from 'react-router-dom';

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        // children: [],
    },
    {
        path: '/auth',
        element: <DefaultLayoutAuth />,
        children: [
            {
                index: true,
                element: <SignIn />,
                // children: [],
            },
            {
                path: 'register',
                index: true,
                element: <Register />,
                // children: [],
            },
            {
                path: 'forgotpassword',
                index: true,
                element: <ForgotPassword />,
                // children: [],
            },
        ],
    },
]);
