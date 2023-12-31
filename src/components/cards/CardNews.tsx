import { BookOpen, Calendar } from 'lucide-react'
import { BsFillPlayFill } from 'react-icons/bs'

interface CardNewsProps {
  imageUrl: string
  title: string
  date: string
}

export function CardNews({ imageUrl, title, date }: CardNewsProps) {
  return (
    <div className="w-full flex items-start justify-center flex-col gap-4 rounded-lg shadow-3xl ">
      <a
        href="#"
        className="relative w-full h-60 overflow-hidden flex items-center justify-center"
      >
        <a className="relative w-12 h-12 z-[2] flex items-center justify-center bg-primary-200">
          <div className="absolute z-0 w-12 h-12 bg-primary-200/70 flex justify-center items-center transition-all duration-300 animate-ping "></div>
          <BookOpen size={24} className="text-white" />
        </a>
        <img
          className="w-full h-full object-cover rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110"
          src={imageUrl}
          alt=""
        />
      </a>

      <div className="w-full max-w-sm pb-8 px-6 flex items-start justify-center flex-col gap-6">
        <div className="flex items-start justify-center flex-col gap-2">
          <p className="text-sm text-gray-500 font-normal flex items-center justify-between flex-row gap-2">
            <span>
              <Calendar size={16} className="text-primary-200" />
            </span>
            {date}
          </p>

          <h1 className="text-lg font-semibold">{title}</h1>

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
    </div>
  )
}
