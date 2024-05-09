
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css'


import Error from '../src/pages/Error.jsx';
import Home from './pages/Home.jsx';
import About from './components/About/About.jsx';
import Account from './components/Account/Account.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Login from './components/Login/Login.jsx'
import FurryFriends from './pages/FurryFriends.jsx';



// Define the accessible routes, and which components respond to which URL
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
  path: '/About',
  element: <About />,
},
{
  path: '/Account',
  element: <Account />,
},
{
  path: '/FurryFriends',
  element: <FurryFriends />
},
{
  path: '/Signup',
  element: <SignUp />
},
{
  path: '/Login',
  element: <Login />
}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
