import ROUTES from 'Constant/routes'
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom'
import PrivateRoute from './private'
import PublicRoute from './public'
import Header from 'Components/Header'
import Footer from 'Components/Footer'
import NotFoundPage from 'Components/NotFound'

function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="*" element={<NotFoundPage />} />
        {ROUTES.map((route, index) => {
          const { component: Component, path, restricted } = route
          return (
            <Route
              key={index}
              path={path}
              element={
                restricted ? (
                  <>
                    <Header />
                    <PrivateRoute component={Component} />
                    <Footer />
                  </>
                ) : (
                  <>
                    <Header />
                    <PublicRoute restricted={false} component={Component} />
                    <Footer />
                  </>
                )
              }
            />
          )
        })}
      </ReactRoutes>
    </BrowserRouter>
  )
}

export default Routes
