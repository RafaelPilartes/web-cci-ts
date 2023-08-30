import { useEffect } from 'react'

import Aos from 'aos'
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Church,
  Clock3,
  Heart,
  HeartHandshake,
  Map,
  Play,
  Plus,
  ScrollText
} from 'lucide-react'
import { CustomSlide } from '../../components/CustomSlide'
import { BaseButton } from '../../components/buttons/baseButton'
import { RecentEvents } from '../../components/main/pages/home/RecentEvents'
import { AboutUs } from '../../components/main/pages/home/AboutUs'
import { CardInfoIcon } from '../../components/cards/CardInfoIcon'
import { CardInfoBigIcon } from '../../components/cards/CardInfoBigIcon'
import { BsFillPlayFill } from 'react-icons/bs'
import { CardVideos } from '../../components/cards/CardVideos'
import { CardReadingPlan } from '../../components/cards/CardReadingPlan'
import { CardNews } from '../../components/cards/CardNews'
import { CardMinistry } from '../../components/cards/CardMinistry'

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

        {/* blog */}
        <div className="w-full bg-homeQuote">
          <div className="container py-24 px-6 flex flex-col justify-center items-start gap-10 text-white ">
            <div className="w-full flex flex-col items-center justify-center gap-6 ">
              <h2 className="relative flex items-center justify-start gap-2 text-primary-200 ">
                <Plus size={18} />
                <span className="text-base font-bold uppercase">BLOGUE</span>
                <Plus size={18} />
              </h2>

              <h1 className="text-4xl font-bold text-center max-w-s-1030:text-3xl max-w-2xl ">
                Posts recentes
              </h1>
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-6 ">
              {/* Last blog */}
              <div className="w-full flex flex-row items-center justify-center shadow-4xl max-w-s-900:flex-col max-w-s-900:h-[60rem] ">
                {/* image */}
                <div className="relative w-full h-[32rem] flex flex-1 flex-col items-center justify-center overflow-hidden ">
                  <img
                    alt=""
                    src="https://metropolitanhost.com/themes/themeforest/html/sacreva/assets/img/video-gallery/01.png"
                    className="w-full h-full z-[1] object-cover rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110"
                  />

                  <button className="relative w-16 h-16 z-[2] flex items-center justify-center bg-primary-200">
                    <div className="absolute z-0 w-16 h-16 bg-primary-200/70 flex justify-center items-center transition-all duration-300 animate-ping "></div>
                    <BookOpen size={30} className="text-white" />
                  </button>
                </div>

                {/* info */}
                <div className="flex min-w-s-900:flex-1 flex-col items-start justify-center gap-6 py-24 px-10 max-w-s-900:py-8 ">
                  <div className="flex flex-col items-start justify-center ">
                    <h3 className="w-full text-base font-medium text-primary-200 flex items-center justify-start gap-2 ">
                      <Calendar size={16} className="text-primary-200" /> 12 de
                      agosto de 2023
                    </h3>
                    <h1 className="w-full text-3xl font-bold">
                      Quando nosso poder de escolha
                    </h1>
                  </div>
                  <p className="w-full text-base leading-8">
                    Somos uma igreja que acredita em Jesus Cristo e nos
                    seguidores e somos uma igreja que acredita em Jesus Cristo.
                    É aqui que você deve começar Lorem ipsum dolor sit amet
                    consectetur adipisicing elit, sed do eiusmod Lorem ipsum
                    dolor sit amet consectetur adipisicing elit, sed do eiusmod
                    É aqui que você deve começar Lorem ipsum dolor sit amet
                    consectetur
                  </p>

                  <div className="flex items-center justify-start flex-row gap-2">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://metropolitanhost.com/themes/themeforest/html/sacreva/assets/img/people/1.jpg"
                      alt="Rounded avatar"
                    />
                    <span>Por</span>
                    <span className="font-semibold">Rafael Pilartes</span>
                  </div>
                </div>
              </div>

              <div className="w-full grid grid-cols-3 gap-4 max-w-s-900:grid-cols-2 max-w-s-640:grid-cols-1 ">
                <CardNews
                  imageUrl="https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d"
                  title="Encontro das mulheres"
                  date="Agos 20, 2023"
                />
                <CardNews
                  imageUrl="https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d"
                  title="Encontro das mulheres"
                  date="Agos 20, 2023"
                />
                <CardNews
                  imageUrl="https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d"
                  title="Encontro das mulheres"
                  date="Agos 20, 2023"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Characteristics */}
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
                typeIcon="img"
                urlIcon="/icon/igreja.png"
                title="Nossa Igreja"
                description="Na CCI você sentirá divindade, piedade, bondade, fé ou crenças corretas."
              />
              <CardInfoBigIcon
                typeColor="primary"
                urlIcon="/icon/pergaminho-antigo.png"
                title="Ministérios"
                description="Estude a Bíblia, aumente sua sabedoria, dê-lhe ousadia em
                    sua fé."
              />
              <CardInfoBigIcon
                typeColor="secondary"
                urlIcon="/icon/oracao.png"
                title="Eventos"
                description="Na CCI você sentirá divindade, piedade, bondade, fé ou crenças corretas."
              />
            </div>
          </div>
        </div>

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

            <div className="w-full max-w-[20rem] flex flex-col justify-center items-center customBaseMargin min-w-s-1390:flex">
              <BaseButton title="Plano de leitura" styleBtn="ShineLight" />
            </div>
          </div>
        </div>

        {/* Broadcast */}
        <div className="w-full">
          <div className="container py-36 px-6 flex flex-col justify-center items-start gap-10 ">
            <div className="w-full flex flex-col items-center justify-center gap-6 ">
              <h2 className="relative flex items-center justify-start gap-2 text-primary-200 ">
                <Plus size={18} />
                <span className="text-base font-bold uppercase">
                  ASSISTA OS CULTOS
                </span>
                <Plus size={18} />
              </h2>

              <h1 className="text-4xl font-bold text-center max-w-s-1030:text-3xl max-w-2xl ">
                Nossas transmissões ao vivo passadas
              </h1>
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-6 ">
              {/* Last Broadcast */}
              <div className="w-full flex flex-row items-center justify-center shadow-4xl max-w-s-900:flex-col max-w-s-900:h-[60rem] ">
                {/* image */}
                <div className="relative w-full h-[32rem] flex flex-1 flex-col items-center justify-center overflow-hidden">
                  <img
                    alt=""
                    src="https://metropolitanhost.com/themes/themeforest/html/sacreva/assets/img/video-gallery/01.png"
                    className="w-full h-full z-[1] object-cover rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110"
                  />

                  <button className="relative w-16 h-16 z-[2] flex items-center justify-center bg-primary-200">
                    <div className="absolute z-0 w-16 h-16 bg-primary-200/70 flex justify-center items-center transition-all duration-300 animate-ping "></div>
                    <BsFillPlayFill size={30} className="text-white" />
                  </button>
                </div>

                {/* info */}
                <div className="flex min-w-s-900:flex-1 flex-col items-start justify-center gap-6 py-24 px-10 max-w-s-900:py-8 ">
                  <div className="flex flex-col items-start justify-center ">
                    <h3 className="w-full text-base font-medium text-primary-200">
                      12 de agosto de 2023
                    </h3>
                    <h1 className="w-full text-3xl font-bold">
                      Quando nosso poder de escolha
                    </h1>
                  </div>
                  <p className="w-full text-base leading-8">
                    Somos uma igreja que acredita em Jesus Cristo e nos
                    seguidores e somos uma igreja que acredita em Jesus Cristo.
                    É aqui que você deve começar Lorem ipsum dolor sit amet
                    consectetur adipisicing elit, sed do eiusmod Lorem ipsum
                    dolor sit amet consectetur adipisicing elit, sed do eiusmod
                    É aqui que você deve começar Lorem ipsum dolor sit amet
                    consectetur
                  </p>
                </div>
              </div>

              <div className="w-full grid grid-cols-3 gap-4 max-w-s-900:grid-cols-2 max-w-s-640:grid-cols-1">
                <CardVideos
                  imageUrl="https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d"
                  title="Encontro das mulheres"
                  date="01 de agosto de 2023"
                />
                <CardVideos
                  imageUrl="https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d"
                  title="Encontro das mulheres"
                  date="01 de agosto de 2023"
                />
                <CardVideos
                  imageUrl="https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d"
                  title="Encontro das mulheres"
                  date="01 de agosto de 2023"
                />
              </div>
            </div>
          </div>
        </div>

        {/* calendar */}
        <div className="w-full">
          <div className="container py-20 px-6 flex flex-col justify-center items-start gap-10 ">
            <div className="w-full flex flex-col items-center justify-center gap-6 ">
              <h2 className="relative flex items-center justify-start gap-2 text-primary-200 ">
                <Plus size={18} />
                <span className="text-base font-bold uppercase">
                  CALENDÁRIO
                </span>
                <Plus size={18} />
              </h2>

              <h1 className="text-4xl font-bold text-center max-w-s-1030:text-3xl max-w-2xl ">
                Horários da semana
              </h1>
            </div>
          </div>

          <div className="relative w-full overflow-x-auto px-6">
            <table className="container w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-sm uppercase bg-secondary-200 text-white">
                <tr>
                  <th scope="col" className="px-6 py-6 min-w-[14rem] ">
                    Domingo
                  </th>
                  <th scope="col" className="px-6 py-6 min-w-[14rem] ">
                    Quarta-feira
                  </th>
                  <th scope="col" className="px-6 py-6 min-w-[14rem] ">
                    Sexta-feira
                  </th>
                  <th scope="col" className="px-6 py-6 min-w-[14rem] ">
                    Sábado
                  </th>
                </tr>
              </thead>

              <tbody className="font-semibold">
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-6 min-w-[14rem] ">
                    <p className="flex flex-row justify-start items-center">
                      <span className="mr-6">07:00</span>
                      1º Culto
                    </p>
                  </td>
                  <td className="px-6 py-6 min-w-[14rem] ">
                    <p className="flex flex-row justify-start items-center">
                      <span className="mr-6">18:00</span>
                      Culto
                    </p>
                  </td>
                  <td className="px-6 py-6 min-w-[14rem] ">
                    <p className="flex flex-row justify-start items-center">
                      <span className="mr-6">18:00</span>
                      Culto
                    </p>
                  </td>
                  <td className="px-6 py-6 min-w-[14rem] ">
                    <p className="flex flex-row justify-start items-center">
                      <span className="mr-6">07:00</span>
                      Culto dos jovens
                    </p>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-6 min-w-[14rem] ">
                    <p className="flex flex-row justify-start items-center">
                      <span className="mr-6">10:00</span>
                      2º Culto
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* reading */}
        <div className="w-full mt-64 bg-homeQuote ">
          <div className="container py-20 px-6 flex flex-col justify-center items-center gap-10 text-white">
            <div className="w-full flex flex-col items-center justify-center gap-6 ">
              <h2 className="relative flex items-center justify-start gap-2 text-primary-200 ">
                <Plus size={18} />
                <span className="text-base font-bold uppercase">Leituras</span>
                <Plus size={18} />
              </h2>

              <h1 className="text-4xl font-bold text-center max-w-s-1030:text-3xl max-w-2xl ">
                Planos de leitura recentes
              </h1>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <CardReadingPlan
                imageUrl="https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d"
                title="Encontro das mulheres"
                date="01 de agosto de 2023"
                duration={1}
              />
              <CardReadingPlan
                imageUrl="https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d"
                title="Encontro das mulheres"
                date="01 de agosto de 2023"
                duration={17}
              />
              <CardReadingPlan
                imageUrl="https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d"
                title="Encontro das mulheres"
                date="01 de agosto de 2023"
                duration={3}
              />
              <CardReadingPlan
                imageUrl="https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d"
                title="Encontro das mulheres"
                date="01 de agosto de 2023"
                duration={41}
              />
            </div>
          </div>
        </div>

        {/* ministry */}
        <div className="w-full">
          <div className="container py-36 px-6 flex flex-col justify-center items-start gap-10 ">
            <div className="flex flex-col gap-6 max-w-4xl">
              <h2 className="relative flex items-center justify-start gap-2 text-primary-200 ">
                <Plus size={18} />
                <span className="text-base font-bold uppercase">
                  MINISTÉRIOS
                </span>
              </h2>

              <h1 className="text-4xl font-bold max-w-s-1030:text-3xl ">
                Nossos Ministérios
              </h1>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              <CardMinistry
                imageUrl="https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d"
                title="Ministério de Música"
                date="01 de agosto de 2023"
              />
              <CardMinistry
                imageUrl="https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d"
                title="Ministério da Mulher"
                date="01 de agosto de 2023"
              />
              <CardMinistry
                imageUrl="https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d"
                title="Ministério de Ajuda"
                date="01 de agosto de 2023"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
