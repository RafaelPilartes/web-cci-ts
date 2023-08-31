import { CardNews } from '../../../cards/CardNews'
import { FeatureHeaderCenter } from '../../FeatureHeaderCenter'
import { CardVideoNormal } from '../../../cards/CardVideoNormal'

export function SectionBlog() {
  return (
    <>
      <div className="w-full bg-homeQuote">
        <div className="container py-24 px-6 flex flex-col justify-center items-start gap-10 text-white ">
          <FeatureHeaderCenter subTitle="BLOGUE" title="Posts recentes" />

          <div className="w-full flex flex-col items-center justify-center gap-6 ">
            {/* Last blog */}
            <CardVideoNormal
              date="12 de agosto de 2023"
              title="Quando nosso poder de escolha"
              description="Somos uma igreja que acredita em Jesus Cristo e nos seguidores
              e somos uma igreja que acredita em Jesus Cristo. É aqui que
              você deve começar Lorem ipsum dolor sit amet consectetur
              adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet
              consectetur adipisicing elit, sed do eiusmod É aqui que você
              deve começar Lorem ipsum dolor sit amet consectetur"
              author="Rafael Pilartes"
              authorImage="https://metropolitanhost.com/themes/themeforest/html/sacreva/assets/img/people/1.jpg"
              imageUrl="https://metropolitanhost.com/themes/themeforest/html/sacreva/assets/img/video-gallery/01.png"
            />

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
    </>
  )
}
