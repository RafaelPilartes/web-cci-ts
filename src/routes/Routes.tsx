import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { routsNameMain } from '../data/routsName'
import RootLayout from '../Layout/RootLayout'
import FourOhFour from '../pages/404'
import Loading from '../pages/loading'
import Register from '../pages/main/register'
import Login from '../pages/main/login'

const Home = React.lazy(() => import('../pages/main/home'))

type Props = {
  children: JSX.Element
}

function PrivateLogin({ children }: Props) {
  const user = null

  if (user != null) {
    return <Navigate to={'/'} />
  }

  return children
}

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Home */}
          <Route
            index
            element={
              <React.Suspense fallback={<Loading />}>
                <Home />
              </React.Suspense>
            }
          />

          {/* register */}
          <Route
            path={routsNameMain.register}
            element={
              <React.Suspense fallback={<Loading />}>
                <PrivateLogin>
                  <Register />
                </PrivateLogin>
              </React.Suspense>
            }
          />
          {/* Login */}
          <Route
            path={routsNameMain.login}
            element={
              <React.Suspense fallback={<Loading />}>
                <PrivateLogin>
                  <Login />
                </PrivateLogin>
              </React.Suspense>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <React.Suspense fallback={<Loading />}>
              <FourOhFour />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
