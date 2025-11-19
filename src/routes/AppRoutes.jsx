import {createBrowserRouter} from 'react-router-dom'
import UserLayout from '../layouts/UserLayout';
import Home from '../pages/Home'
import About from '../pages/About';
import Download from '../pages/Download';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {index: true, element: <Home />},
            {path: "download", element: <Download />},
            {path: "about", element: <About />},
        ]
    },
]);
