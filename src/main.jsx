
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage.jsx';
import BookListPage from './Pages/BookListPage/BookListPage.jsx';
import ReadPage from './Pages/ReadPage/ReadPage.jsx';
import Home from './Pages/HomePage/Home.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import WishList from './Components/WishList/WishList.jsx';
import ReadList from './Components/ReadList/ReadList.jsx';
import { Toaster } from 'react-hot-toast';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {

    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        element: <Home></Home>,
        loader: () => fetch(`../books.json`)
      },
      {
        path: '/BookList',
        element: <BookListPage></BookListPage>,         
         
        children: [
          {
            index: '/BookList',
            element: <ReadList></ReadList>,
            loader: () => fetch('../books.json')
          },
          {
            path: 'wishlist',
            element: <WishList></WishList>,
            loader: () => fetch('../books.json')
          }
        ]
        
      },
      {
        path: '/ReadBooks',
        element: <ReadPage></ReadPage>
      },
      {
        path: '/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../books.json')
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </>,
)
