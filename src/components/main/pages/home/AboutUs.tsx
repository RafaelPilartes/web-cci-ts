import { Plus, Heart, BookOpen, ArrowRight } from 'lucide-react'
import { BaseButton } from '../../../buttons/baseButton'
import { CardInfoIcon } from '../../../cards/CardInfoIcon'

export function AboutUs() {
  return (
    <>
      <div className="w-full">
        <div className="container flex flex-col items-center justify-center gap-8 py-32 px-16 lg:flex-row ">
          <div className="flex-1 flex items-center justify-center ">
            <img
              alt=""
              src="https://metropolitanhost.com/themes/themeforest/html/sacreva/assets/img/about-group1/1.jpg"
              className="w-full max-w-md"
            />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <h2 className="relative flex items-center justify-start gap-2 text-primary-200 ">
              <Plus size={18} />
              <span className="text-base font-bold uppercase">
                Temos mais de 24 anos de experiência
              </span>
            </h2>

            <h1 className="text-4xl font-bold max-w-s-1030:text-3xl ">
              Estamos dando pequenos passos para tornar a Terra um planeta
              melhor
            </h1>

            <p>
              Damos-lhe as boas-vindas com grande alegria à Igreja Zegen.
              Estamos aqui para compartilhar as grandes novas de Jesus Cristo a
              todos que quiserem ouvir.
            </p>

            <p className="relative pl-6 py-2 my-4 border-l-2 border-primary-200 text-2xl font-damion">
              <div className="w-7 h-[0.18rem] bg-primary-200 absolute -left-[1rem] top-5" />
              O nome do Senhor é uma torre forte; os justos se deparam com isso
              e estão seguros.
            </p>

            <div className="flex flex-col items-center justify-start gap-4 sm:flex-row ">
              <CardInfoIcon
                icon={Heart}
                title="Lugar do céu"
                description="Na CCI você sentirá divindade, piedade, bondade, fé ou crenças corretas."
              />
              <CardInfoIcon
                icon={BookOpen}
                title="Estudo bíblico"
                description="Estude a Bíblia, aumente sua sabedoria, dê-lhe ousadia em
                    sua fé."
              />
            </div>

            <div className="w-full max-w-[10rem] min-w-s-1390:flex">
              <BaseButton
                iconRight={ArrowRight}
                title="SABER MAIS"
                styleBtn="LeftToRight"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
