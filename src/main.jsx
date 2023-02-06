import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router/router';
import { RouterProvider } from 'react-router-dom';

// Styles
import "./styles/index.scss";

// Preloader
import Loader from './components/Loader/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Suspense fallback={<Loader />}>
    <RouterProvider router={router} />
  </React.Suspense>
);