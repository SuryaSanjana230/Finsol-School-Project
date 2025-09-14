// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { ContactUs } from './components/ContactUs';
import { Gallery } from './components/Gallery';
import { Root } from './components/root';
import { NavBar } from './components/NavBar';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <NavBar/>,
      children: [
        {
          path: '/',
          element: <Root />
        },
        {
          path: "/contact",
          element: <ContactUs />
        },
        {
          path: "/gallery",
          element: <Gallery />
        }
      ]
    }
  ])
  
  return (
    <>
    <RouterProvider router={router} />
    </>

  );
}

export default App;
