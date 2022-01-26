// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'

const Routes = () => {
  return (
    <Router>
      <DashboardLayout>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about/{station_number}/{type}/{date_range}" page={AboutPage} name="about" />
        <Route path="/t-graph" page={TGraphPage} name="tGraph" />
        <Route path="/input" page={InputPage} name="input" />
        <Route notfound page={NotFoundPage} />
      </DashboardLayout>
    </Router>
  )
}

export default Routes
