import { Plus } from 'lucide-react'
import { CardInfoBigIcon } from '../../../cards/CardInfoBigIcon'
import { FeatureHeaderLeft } from '../../FeatureHeaderLeft'

export function SectionCharacteristics() {
  return (
    <>
      <div className="w-full">
        <div className="container py-36 px-6 flex flex-col justify-center items-start gap-10 ">
          <FeatureHeaderLeft
            subTitle="CARACTERÍSTICAS"
            title="Como podemos ajudar"
          />

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
    </>
  )
}
