import Aos from 'aos'
import { useEffect } from 'react'

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <>
      <h1>HOME</h1>
    </>
  )
}

export default Home
