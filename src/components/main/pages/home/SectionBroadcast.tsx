import { CardVideos } from '../../../cards/CardVideos'
import { FeatureHeaderCenter } from '../../FeatureHeaderCenter'
import { CardVideoBig } from '../../../cards/CardVideoBig'

export function SectionBroadcast() {
  return (
    <>
      <div className="w-full">
        <div className="container py-36 px-6 flex flex-col justify-center items-start gap-10 ">
          <FeatureHeaderCenter
            subTitle="ASSISTA OS CULTOS"
            title="Nossas transmissões ao vivo passadas"
          />

          <div className="w-full flex flex-col items-center justify-center gap-6 ">
            {/* Last Broadcast */}
            <CardVideoBig
              date="12 de agosto de 2023"
              title="Quando nosso poder de escolha"
              description=" Somos uma igreja que acredita em Jesus Cristo e nos seguidores
              e somos uma igreja que acredita em Jesus Cristo. É aqui que
              você deve começar Lorem ipsum dolor sit amet consectetur
              adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet
              consectetur adipisicing elit, sed do eiusmod É aqui que você
              deve começar Lorem ipsum dolor sit amet consectetur"
              imageUrl="https://metropolitanhost.com/themes/themeforest/html/sacreva/assets/img/video-gallery/01.png"
            />

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
    </>
  )
}
