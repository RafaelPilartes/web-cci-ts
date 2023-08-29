import { useEffect } from 'react'

import Aos from 'aos'
import { ArrowRight } from 'lucide-react'
import { CustomSlide } from '../../components/CustomSlide'

function Home() {
  const imageUrls: string[] = [
    'https://metropolitanhost.com/themes/themeforest/html/sacreva/assets/img/banner/5.jpg',
    'https://metropolitanhost.com/themes/themeforest/html/sacreva/assets/img/banner/1.jpg'
    // Add more image URLs here
  ]

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        {/* Custom Silde */}
        <div className="w-full h-full flex justify-center items-center">
          <CustomSlide slides={imageUrls} />
        </div>

        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>

        <br />
        <br />

        <br />
        <br />
      </div>
    </>
  )
}

export default Home
