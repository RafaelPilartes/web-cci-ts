import Aos from 'aos'
import { useEffect } from 'react'

function Register() {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <>
      <h1>Register</h1>
    </>
  )
}

export default Register
