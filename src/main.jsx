import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatTrip from './component/create-trip/index.jsx'
import Header from './component/custom/Header.jsx'
import { Toaster } from 'sonner'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Viewtrip from './view-trip/[tripId]/index.jsx'
import MyTrip from './myTrip/index.jsx'

const router= createBrowserRouter([
  {
    path:'/',
    element:<App />,
    // other routes...
  },
  {
    path:'/create-trip',
    element:<CreatTrip />,
    // other routes...
  },
  {
    path:'/view-trip/:tripId',
    element:<Viewtrip />,
    // other routes...
  },
  {
    path:'/my-trip',
    element:<MyTrip />,
    // other routes...
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.OAUTH_ID ||'676065544673-no3t0d8g50qfckvsshnnqm1edjo5os2f.apps.googleusercontent.com' }>
    <Header/>
    <Toaster />
    <RouterProvider router={router}/>
    </GoogleOAuthProvider>
  </StrictMode>,
)
