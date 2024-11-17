import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage.jsx';
import BookListPage from './Pages/BookListPage/BookListPage.jsx';
import ReadPage from './Pages/ReadPage/ReadPage.jsx';
import Home from './Pages/HomePage/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children:[
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/BookList',
        element: <BookListPage></BookListPage>
      },
      {
        path: '/ReadBooks',
        element: <ReadPage></ReadPage>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
