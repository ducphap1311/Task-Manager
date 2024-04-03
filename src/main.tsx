import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './i18n/i18n.ts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <React.Fragment>
    <App />
  </React.Fragment>
  // </React.StrictMode>,
)
