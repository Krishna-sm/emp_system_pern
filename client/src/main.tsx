import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { SidebarContextProvider } from './context/Sidebar'
import { Provider } from 'react-redux'
import { Store } from './redux/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={Store}>
    <SidebarContextProvider>
        <RouterProvider router={router} />
        </SidebarContextProvider>
        </Provider>
  </StrictMode>,
)
