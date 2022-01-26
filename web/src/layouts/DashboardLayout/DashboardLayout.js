import SideBar from 'src/components/SideBar/SideBar'

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div>
          <div className="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-gray-800 p-4 transition-all duration-200 ease-in-out -translate-x-64">
            <SideBar />
          </div>
        </div>
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <div className="h-screen bg-white">
            <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 -mb-px"></div>
              </div>
            </header>
            <main className="relative">
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto absolute z-0">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
