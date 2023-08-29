import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { BaseButton } from './buttons/baseButton'

type SlidesDetailsProps = {
  slides: string[]
}

export function CustomSlide({ slides }: SlidesDetailsProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prevSlide: any) => (prevSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide: any) => (prevSlide - 1 + slides.length) % slides.length
    )
  }

  return (
    <div className="relative w-screen h-screen flex items-center justify-center rounded-md">
      {slides.map((slide, index) => (
        <motion.img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className={`w-full h-full absolute object-cover ${
            index === currentSlide
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 0.3 }} // Tempo de duração da animação (ajuste conforme necessário)
        />
      ))}

      {/* Content */}
      <div className="absolute container w-full inset-0 flex items-center justify-center px-4">
        <div className="px-12 flex justify-center items-center flex-col gap-4 text-baseTextWhite text-center">
          <h1 className="text-5xl font-bold max-w-s-520:text-3xl ">
            Comunidade Cristã Internacional
          </h1>
          <p className="text-xl font-normal max-w-s-420:text-base ">
            Somos uma familia, unidos pelo amor de Cristo Jesus
          </p>

          <div className="">
            <BaseButton
              iconRight={ArrowRight}
              title="Saiba mais sobre a CCI"
              styleBtn="ShineLight"
            />
          </div>
        </div>
      </div>

      {/* Button  */}
      <div className="absolute w-full inset-0 flex items-center justify-between px-4">
        <button
          onClick={prevSlide}
          className="text-white text-2xl px-4 py-2 bg-baseText hover:bg-primary-200 active:bg-primary-700 rounded transition-all duration-200"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="text-white text-2xl px-4 py-2 bg-baseText hover:bg-primary-200 active:bg-primary-700 rounded transition-all duration-200"
        >
          &gt;
        </button>
      </div>
    </div>
  )
}
