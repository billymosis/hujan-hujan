import SideBar from 'src/components/SideBar/SideBar'
import { useState } from 'react'
import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  useMantineTheme,
} from '@mantine/core'
import logo from '../../assets/logo.png'
import { Link, routes } from '@redwoodjs/router'

const DashboardLayout = ({ children }) => {
  const [opened, setOpened] = useState(false)
  const theme = useMantineTheme()
  return (
    <AppShell
      className="relative"
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          className="z-10"
          padding="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 100, lg: 200 }}
        >
          <Navbar.Section className="text-center">
            <span className="text-lg font-bold">Menu</span>
          </Navbar.Section>
          <Navbar.Section grow mt="lg">
            <SideBar setOpen={() => setOpened(!opened)} />
          </Navbar.Section>
          <Navbar.Section>By Billy Mosis Priambodo</Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} padding="md">
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <span>
              <Link to={routes.home()}>
                <img src={logo} width={150} alt="logo" />
              </Link>
            </span>
          </div>
        </Header>
      }
    >
      <div className="relative">{children}</div>
    </AppShell>
  )
}

export default DashboardLayout

// <>
//   <div className="flex h-screen overflow-hidden">
//     <div>
//       <div className="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-gray-800 p-4 transition-all duration-200 ease-in-out -translate-x-64">
//         <SideBar />
//       </div>
//     </div>
//     <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
//       <div className="h-screen bg-white">
//         <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
//           <div className="px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between h-16 -mb-px"></div>
//           </div>
//         </header>
//         <main className="relative">
//           <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto absolute z-0">
//             {children}
//           </div>
//         </main>
//       </div>
//     </div>
//   </div>
// </>
