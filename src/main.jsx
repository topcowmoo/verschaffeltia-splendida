import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import App from './App';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

const router = createBrowserRouter([
{
  path: '/',
  element: <App />,
  errorElement: <Error />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: '/AboutMe',
      element: <AboutMe />,
    },
    {
      path: '/Contact',
      element: <Contact />,
    },
    {
      path: '/Portfolio',
      element: <Portfolio />,
    },
    {
      path: '/Resume',
      element: <Resume />,
    },
  ],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
);
