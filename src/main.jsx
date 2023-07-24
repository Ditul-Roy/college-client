import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import Collages from './Pages/Collages/Collages';
import Admission from './Pages/Admission/Admission';
import MyCollage from './Pages/MyCollage/MyCollage';
import CollegeDetails from './Pages/Home/CollegeDetails/CollegeDetails';
import AdmissionForm from './Pages/Admission/AdmissionForm/AdmissionForm';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import PrivateRoute from './Route/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/college/:id',
        element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/college/${params.id}`)
      },
      {
        path: 'collages',
        element: <Collages></Collages>
      },
      {
        path: 'admission',
        element: <Admission></Admission>
      },
      {
        path: '/book/:id',
        element: <AdmissionForm></AdmissionForm>,
        loader: ({ params }) => fetch(`http://localhost:5000/college/${params.id}`)
      },
      {
        path: 'myCollage',
        element: <MyCollage></MyCollage>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-6xl mx-auto'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
