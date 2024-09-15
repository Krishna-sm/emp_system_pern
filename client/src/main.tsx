import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { SidebarContextProvider } from './context/Sidebar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarContextProvider>
        <RouterProvider router={router} />
        </SidebarContextProvider>
  </StrictMode>,
)
