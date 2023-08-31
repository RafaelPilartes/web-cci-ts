import { Plus } from 'lucide-react'
import { CardReadingPlan } from '../../../cards/CardReadingPlan'
import { FeatureHeaderCenter } from '../../FeatureHeaderCenter'

export function SectionReading() {
  return (
    <>
      <div className="w-full mt-64 bg-homeQuote ">
        <div className="container py-20 px-6 flex flex-col justify-center items-center gap-10 text-white">
          <FeatureHeaderCenter
            subTitle="Leituras"
            title="Planos de leitura recentes"
          />

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
    </>
  )
}
