import { PlusIcon } from 'lucide-react'

interface FeatureHeaderLeftProps {
  title: string
  subTitle: string
}

export function FeatureHeaderLeft({ title, subTitle }: FeatureHeaderLeftProps) {
  return (
    <div className="flex flex-col gap-6 max-w-4xl">
      <h2 className="relative flex items-center justify-start gap-2 text-primary-200">
        <PlusIcon size={18} />
        <span className="text-base font-bold uppercase">{subTitle}</span>
      </h2>

      <h1 className="text-4xl font-bold max-w-s-1030:text-3xl">{title}</h1>
    </div>
  )
}
