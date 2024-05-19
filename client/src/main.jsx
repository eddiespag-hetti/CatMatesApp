
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './index.css'

import Error from './pages/Error.jsx';

import Home from './pages/Home.jsx';
import About from './components/About/About.jsx';
import ProfilePage from './pages/Profile.jsx';
import SignUpForm from './components/SignUp/SignupForm.jsx';
import LoginForm from './components/Login/Login.jsx';
import FurryFriends from './pages/FurryFriends.jsx';
import CatInfo from './pages/CatInfo.jsx';




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
  path: '/Profile',
  element: <ProfilePage />,
},
{
  path: '/FurryFriends',
  element: <FurryFriends />
},
{
  path: '/Signup',
  element: <SignUpForm />
},
{
  path: '/Login',
  element: <LoginForm />
},
{
path: '/CatInfo',
element: <CatInfo />
}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
