import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { ThemeProvider } from './context/ThemeContext.jsx';
import RootLayout from './routes/RootLayout.jsx';
import HomePage from './routes/HomePage.jsx';
import UsersPage from './routes/UsersPage.jsx';
import ContactPage from './routes/ContactPage.jsx';
import ToolsPage from './routes/ToolsPage.jsx';
import ErrorPage from './routes/ErrorPage.jsx';

import '../index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'users', element: <UsersPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'tools', element: <ToolsPage /> },
    ],
  },
], {
  basename: import.meta.env.BASE_URL || '/'
});

try {
  const rootEl = document.getElementById('root');
  if (!rootEl) throw new Error('Root element #root not found');

  console.log('Mounting React app...');

  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
} catch (e) {
  console.error('Error mounting app', e);
  if (window && window.__showError) {
    window.__showError('Error mounting app: ' + (e.message || e.toString()));
  } else {
    const el = document.createElement('div');
    el.style.color = 'red';
    el.textContent = 'Error mounting app: ' + (e.message || e.toString());
    document.body.appendChild(el);
  }
}
