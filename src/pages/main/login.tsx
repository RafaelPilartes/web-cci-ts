import Aos from 'aos'
import { useEffect } from 'react'

function Login() {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <>
      <h1>Login</h1>
    </>
  )
}

export default Login
