import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main/Main';
import VideoPage from './pages/VideoPage/VideoPage';
import Preview from './pages/Preview/Preview';

// 1. Глобально отключаем контекстное меню (правый клик и долгий тап)
// document.addEventListener('contextmenu', (e) => e.preventDefault());

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Preview />,
  },
  {
    path: '/main',
    element: <Main />,
  },
  {
    path: '/video/:videoId',
    element: <VideoPage />,
  },
]);
root.render(<RouterProvider router={router} />);
