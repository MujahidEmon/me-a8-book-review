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
import BookDetails from './Components/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children:[
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch('../books.json')
      },
      {
        path: '/BookList',
        element: <BookListPage></BookListPage>,        
        loader: () => fetch('../books.json')
        
      },
      {
        path: '/ReadBooks',
        element: <ReadPage></ReadPage>
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/public/books.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
