import { useEffect } from 'react'

import Aos from 'aos'
import { ArrowRight, BookOpen, Clock3, Heart, Map, Plus } from 'lucide-react'
import { CustomSlide } from '../../components/CustomSlide'
import { BaseButton } from '../../components/buttons/baseButton'
import { EventCard } from '../../components/cards/EventCard'
import { CardInfoIcon } from '../../components/cards/InfoIconCard'
import { RecentEvents } from '../../components/main/pages/home/RecentEvents'
import { AboutUs } from '../../components/main/pages/home/AboutUs'

function Home() {
  const slidesHome: any = [
    {
      slideUrl:
        'https://metropolitanhost.com/themes/themeforest/html/sacreva/assets/img/banner/1.jpg',
      title: 'Comunidade Cristã Internacional',
      description:
        'Somos uma familia, unidos pelo amor de Cristo Jesus, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque eum, molestiae aspernatur, placeat illo, deserunt iusto magni amet rem corrupti dolor quas. Reiciendis repellat ratione dolore molestias veniam aliquid amet.'
    },
    {
      slideUrl:
        'https://metropolitanhost.com/themes/themeforest/html/sacreva/assets/img/banner/5.jpg',
      title: 'Com cristo somos 1',
      description:
        'Somos uma familia, unidos pelo amor de Cristo Jesus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque eum, molestiae aspernatur, placeat illo, deserunt iusto magni amet rem corrupti dolor quas. Reiciendis repellat ratione dolore molestias veniam aliquid amet.'
    }
  ]

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        {/* Custom Silde */}
        <div className="w-full h-full flex justify-center items-center">
          <CustomSlide slides={slidesHome} />
        </div>

        {/* Recent */}
        <RecentEvents />

        {/* About Us */}
        <AboutUs />

        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
      </div>
    </>
  )
}

export default Home
