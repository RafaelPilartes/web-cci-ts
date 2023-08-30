import { useEffect } from 'react'

import Aos from 'aos'
import {
  ArrowRight,
  BookOpen,
  Church,
  Clock3,
  Heart,
  HeartHandshake,
  Map,
  Plus,
  ScrollText
} from 'lucide-react'
import { CustomSlide } from '../../components/CustomSlide'
import { BaseButton } from '../../components/buttons/baseButton'
import { RecentEvents } from '../../components/main/pages/home/RecentEvents'
import { AboutUs } from '../../components/main/pages/home/AboutUs'
import { CardInfoIcon } from '../../components/cards/CardInfoIcon'
import { CardInfoBigIcon } from '../../components/cards/CardInfoBigIcon'

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

        {/* get-quote */}
        <div className="w-full bg-homeQuote ">
          <div className="container py-20 px-6 flex flex-col justify-center items-center gap-10 text-white">
            <div className="w-24 h-24 bg-primary-200/70 rounded-full flex justify-center items-center">
              <div className="relative w-16 h-16 bg-primary-200/70 rounded-full flex justify-center items-center">
                <Heart size={30} className="z-10" />
                <div className="absolute z-0 w-20 h-20 bg-primary-200/70 rounded-full flex justify-center items-center transition-all duration-300 animate-ping "></div>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-center">
              "Rezar! E ouça a Deus! Você pode fazer isso sozinho, mas encontre
              alguém para fazer isso com você”
            </h1>

            <p className="text-2xl text-center font-dancingScript">
              Jornada cruzada de história, de santidade em santidade
            </p>

            <div className="w-full max-w-[20rem] customBaseMargin min-w-s-1390:flex">
              <BaseButton title="Plano de leitura" styleBtn="ShineLight" />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="container py-36 px-6 flex flex-col justify-center items-start gap-10 ">
            <div className="flex flex-col gap-6 max-w-4xl">
              <h2 className="relative flex items-center justify-start gap-2 text-primary-200 ">
                <Plus size={18} />
                <span className="text-base font-bold uppercase">
                  CARACTERÍSTICAS
                </span>
              </h2>

              <h1 className="text-4xl font-bold max-w-s-1030:text-3xl ">
                Como podemos ajudar
              </h1>
            </div>

            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row ">
              <CardInfoBigIcon
                icon={Church}
                title="Nossa Igreja"
                description="Na CCI você sentirá divindade, piedade, bondade, fé ou crenças corretas."
              />
              <CardInfoBigIcon
                typeColor="primary"
                icon={ScrollText}
                title="Nossa Igreja"
                description="Estude a Bíblia, aumente sua sabedoria, dê-lhe ousadia em
                    sua fé."
              />
              <CardInfoBigIcon
                typeColor="secondary"
                icon={HeartHandshake}
                title="Eventos"
                description="Na CCI você sentirá divindade, piedade, bondade, fé ou crenças corretas."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
