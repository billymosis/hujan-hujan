import { useState } from 'react';
import logo from '../../assets/logo.png'
import { NavLink, Outlet } from 'react-router-dom'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const ItemMenu = ({ toggle, children, to }: { toggle: () => void, children: string, to: string }) => (
  <NavLink className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-800 "} onClick={toggle} to={to}>
    <li className="py-2"><span className="hover:text-blue-900">{children}</span></li>
  </NavLink>
)

const Bar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
)

const XMark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const DashboardLayout = ({ isError = false }: { isError?: boolean }) => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <nav className="bg-white border-b border-gray-200">
        <div className="flex justify-between items-center p-4">
          <img className="w-auto h-8 md:h-16" src={logo} alt="Website Logo" />
          <div className="md:hidden text-blue-500" onClick={toggleAside}><Bar /></div>
        </div>
      </nav>
      <div className="flex-1 flex flex-col md:flex-row">
        <aside className={`w-3/4 md:w-1/6 bg-white border-r border-gray-200 ${isAsideOpen ? 'absolute h-full top-0 left-0 z-10 transition duration-300 ease-in-out transform translate-x-0 md:h-auto md:static' : 'hidden md:block'}`}>
          <div className="p-4">
            <div className="flex justify-between">
              <h2 className="text-lg font-medium text-blue-500">Menu</h2>
              <div className="md:hidden text-blue-500" onClick={toggleAside}><XMark /></div>
            </div>
            <ul className="mt-4">
              <ItemMenu to="/" toggle={toggleAside}>
                Home
              </ItemMenu>
              <ItemMenu to="/input" toggle={toggleAside}>
                Input
              </ItemMenu>
              <ItemMenu to="/about" toggle={toggleAside}>
                About
              </ItemMenu>
            </ul>
          </div>
        </aside>
        <main className="flex-1 p-4">
          {isError
            ?
            (<NotFoundPage />)
            : (
              <Outlet />
            )}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout
