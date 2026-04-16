import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import AllFriends from './pages/Homepage/Timeline/Timeline'
import Friend from './pages/Homepage/Stats/Stats'
import Timeline from './pages/Homepage/Timeline/Timeline'
import Stats from './pages/Homepage/Stats/Stats'
import NotFound from './pages/Homepage/NotFoundPage/NotFound'
import FriendDetail from './pages/FreindDetail/FriendDetail'
import Homepage from './pages/Homepage/Homepage'

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: RootLayout,
      children: [
        {
         index:true,
         element: <Homepage> </Homepage>
        },
        {
          path:'/frienddetails',
          element: <FriendDetail> </FriendDetail>
        },
        {
          path: '/timeline',
          element: <Timeline> </Timeline>
        },
        {
          path: 'stats',
          element: <Stats></Stats>
        }
      ],
      errorElement: <NotFound> </NotFound>
    },
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
