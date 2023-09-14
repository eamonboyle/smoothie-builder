import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/layout/Root';
import { About, Home, NotFound } from './components/pages';

const router = createBrowserRouter([
  // list of your routes
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);