import React from 'react'
import ReactDOM from 'react-dom/client'
import PostListPage from './PostListPage.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import PostPage from './PostPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostListPage />,
  },
  {
    path: "/post/:id",
    element: <PostPage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
