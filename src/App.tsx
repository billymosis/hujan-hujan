import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const DashboardLayout = React.lazy(() => import('./layouts/DashboardLayout/DashboardLayout'))
const InputPage = React.lazy(() => import('./pages/InputPage/InputPage'))
const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'))
const AboutPage = React.lazy(() => import('./pages/AboutPage/AboutPage'))
const GraphPage = React.lazy(() => import('./pages/GraphPage/GraphPage'))

const DOMAIN = import.meta.env.VITE_DOMAIN

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <DashboardLayout />
    ),
    errorElement: <DashboardLayout isError />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<div>Loading ...</div>}>
            <HomePage />
          </React.Suspense>
        ),
      },
      {
        path: 'input',
        element: (
          <React.Suspense fallback={<div>Loading ...</div>}>
            <InputPage />
          </React.Suspense>
        ),
        loader: async () => {
          const res = await fetch(`${DOMAIN}/stations`);
          const data = await res.json();
          return data;
        }
      },
      {
        path: 'input/:data',
        element: (
          <React.Suspense fallback={<div>Loading ...</div>}>
            <GraphPage />
          </React.Suspense>
        ),
        loader: async (props) => {
          const url = new URL(props.request.url);
          const { pathname, search, searchParams } = url;
          const stationNumber = searchParams.get('stationNumber')
          const type = searchParams.get('type') || ''
          const dateRange = searchParams.get('dateRange') || ''
          const res = await fetch(`${DOMAIN}${pathname}${search}`);
          const data = await res.json();
          return { data, stationNumber, type, dateRange };
        }
      },
      {
        path: 'about',
        element: (
          <React.Suspense fallback={<div>Loading ...</div>}>
            <AboutPage />
          </React.Suspense>
        ),
      },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
