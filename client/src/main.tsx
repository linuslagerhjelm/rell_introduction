import React from 'react'
import ReactDOM from 'react-dom/client'
import PostListPage from './PostListPage'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import PostPage from './PostPage'
import WritePostPage from './WritePostPage'
import { Buffer } from 'buffer'

globalThis.Buffer = Buffer

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostListPage />,
  },
  {
    path: "/post/:id",
    element: <PostPage />
  },
  {
    path: "/post/write",
    element: <WritePostPage />
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
