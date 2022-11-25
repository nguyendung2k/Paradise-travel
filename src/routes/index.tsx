import { Home, Login } from '@/pages';

import { createBrowserRouter } from 'react-router-dom';

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
        children:[
            
        ]
    },
]);
