import Index from './Home/About_us/Index';
import About_us from './Home/About_us/About_us';
import Login from './Home/Login/Login';
import Register from './Home/Register/Register';

export const Routes_data=[
    {
        path:'/',
        page:<Index />
    },
    {
        path:'/about-us',
        page:<About_us />
    },
    {
        path:'/register',
        page:<Register />
    },
    {
        path:'/login',
        page:<Login />
    }
];