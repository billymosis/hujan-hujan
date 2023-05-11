import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';
import InputPage from './pages/InputPage/InputPage';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import GraphPage from './pages/GraphPage/GraphPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    errorElement: <DashboardLayout isError />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'input',
        element: <InputPage />,
        loader: async () => {
          const res = await fetch('http://127.0.0.1:8080/stations');
          const data = await res.json();
          return data;
        }
      },
      {
        path: 'input/:data',
        element: <GraphPage />,
        loader: async (props) => {
          const url = new URL(props.request.url);
          const { pathname, search, searchParams } = url;
          const stationNumber = searchParams.get('stationNumber')
          const type = searchParams.get('type') || ''
          const dateRange = searchParams.get('dateRange') || ''
          const res = await fetch(`http://127.0.0.1:8080${pathname}${search}`);
          const data = await res.json();
          return { data, stationNumber, type, dateRange };
        }
      },
      {
        path: 'about',
        element: <AboutPage />
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
