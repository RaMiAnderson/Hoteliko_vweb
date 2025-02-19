import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//route ImportDep
import {createBrowserRouter, RouterProvider, Route, Navigate} from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from './context/themeContext.tsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <Toaster />
    <App/>
    </ThemeProvider>
   
  </StrictMode>
)
