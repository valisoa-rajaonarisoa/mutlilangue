// index.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContent from './pages/MainContent';
import LanguageSwitcher from './utils/LanguageSwitcher';
import './i18n'

// Creation du routeur 
const router = createBrowserRouter([
  {
    path: "/:lng?/*", // definition du langue
    element: (
      <>
      
        <LanguageSwitcher />
        <MainContent />
      </>
    ),
  },
]);

// Rendu de l'application
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);