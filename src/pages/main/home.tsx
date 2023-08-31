import { useEffect } from 'react'

import Aos from 'aos'

import { CustomSlide } from '../../components/CustomSlide'
import { RecentEvents } from '../../components/main/pages/home/SectionRecentEvents'
import { AboutUs } from '../../components/main/pages/home/AboutUs'
import { SectionBlog } from '../../components/main/pages/home/SectionBlog'
import { SectionCalendar } from '../../components/main/pages/home/SectionCalendar'
import { SectionBroadcast } from '../../components/main/pages/home/SectionBroadcast'
import { SectionCharacteristics } from '../../components/main/pages/home/SectionCharacteristics'
import { SectionReading } from '../../components/main/pages/home/SectionReading'
import { SectionMinistry } from '../../components/main/pages/home/SectionMinistry'
import { SectionSeeAllReadings } from '../../components/main/pages/home/SectionseeAllReadings'

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

        {/* Blog */}
        <SectionBlog />

        {/* Characteristics */}
        <SectionCharacteristics />

        {/* seeAllReadings */}
        <SectionSeeAllReadings />

        {/* Broadcast */}
        <SectionBroadcast />

        {/* Calendar */}
        <SectionCalendar />

        {/* Reading */}
        <SectionReading />

        {/* Ministry */}
        <SectionMinistry />
      </div>
    </>
  )
}

export default Home
