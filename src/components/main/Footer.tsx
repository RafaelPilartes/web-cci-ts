import { AiOutlineStar } from 'react-icons/ai'
import { routsNameMain } from '../../data/routsName'
import { Calendar, SendHorizontal } from 'lucide-react'

export const Footer = () => {
  return (
    <>
      <footer className="w-full bg-blue-950 dark:bg-gray-900 bg-footer">
        <div className="mx-auto w-full py-8 px-4 max-w-screen-min-w-s-1390">
          <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 min-w-s-1030:grid-cols-4 sm:grid-cols-2">
            {/* About CCI */}
            <div>
              <h2 className="relative mb-6 text-xl font-bold text-baseTextWhite pl-8 border-l-2 border-primary-200  ">
                <div className="w-6 h-[0.1rem] bg-primary-200 absolute -left-[0.79rem] top-2" />
                About CCI
              </h2>
              <ul className="text-baseTextGray ">
                <li className="mb-4">
                  <span>
                    Website da CCI, foi projetado profissionalmente para igrejas
                    sem fins lucrativos, igrejas modernas, grupos de oração,
                    organizações cristãs, de caridade e sem fins lucrativos.
                    Pegue logo!
                  </span>
                </li>
              </ul>
            </div>

            {/* Links Rápidos */}
            <div>
              <h2 className="relative mb-6 text-xl font-bold text-baseTextWhite pl-8 border-l-2 border-primary-200 ">
                <div className="w-6 h-[0.1rem] bg-primary-200 absolute -left-[0.79rem] top-2" />
                Links Rápidos
              </h2>
              <ul className="text-baseTextGray ">
                <li className="mb-4">
                  <a
                    href="#"
                    className="flex justify-start items-center gap-2 transition-all duration-300 hover:text-primary-200"
                  >
                    <AiOutlineStar size={14} /> Quem Nós Somos?
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="flex justify-start items-center gap-2 transition-all duration-300 hover:text-primary-200"
                  >
                    <AiOutlineStar size={14} /> Suporte E Perguntas Frequentes
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="flex justify-start items-center gap-2 transition-all duration-300 hover:text-primary-200"
                  >
                    <AiOutlineStar size={14} />
                    Termos De Doações
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="flex justify-start items-center gap-2 transition-all duration-300 hover:text-primary-200"
                  >
                    <AiOutlineStar size={14} /> Voluntário
                  </a>
                </li>
              </ul>
            </div>

            {/* Últimas notícias */}
            <div>
              <h2 className="relative mb-6 text-xl font-bold text-baseTextWhite pl-8 border-l-2 border-primary-200 ">
                <div className="w-6 h-[0.1rem] bg-primary-200 absolute -left-[0.79rem] top-2" />
                Últimas notícias
              </h2>
              <ul className="text-baseTextGray ">
                <li className="mb-4">
                  <a
                    href="#"
                    className="items-center block p-3 rounded-md sm:flex transition-all duration-300 hover:bg-gray-700/30 dark:hover:bg-gray-700"
                  >
                    <img
                      className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0"
                      src="https://zozothemes.com/html/zegen/images/blog/thumb/blog_thumb1-80x80.jpg"
                      alt="Jese Leos image"
                    />
                    <div className="text-gray-600 flex flex-col gap-1 dark:text-gray-400">
                      <p className="transition-all duration-300 text-baseTextGray hover:text-primary-200">
                        Giving Back – Uganda Training Centers
                      </p>
                      <span className="items-center justify-start gap-2 text-xs font-normal text-gray-500 flex transition-all duration-300 dark:text-gray-400">
                        <Calendar size={12} className="text-primary-200" />
                        Oct 21, 2019
                      </span>
                    </div>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="items-center block p-3 rounded-md sm:flex transition-all duration-300 hover:bg-gray-700/30 dark:hover:bg-gray-700"
                  >
                    <img
                      className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0"
                      src="https://zozothemes.com/html/zegen/images/blog/thumb/blog_thumb1-80x80.jpg"
                      alt="Jese Leos image"
                    />
                    <div className="text-gray-600 flex flex-col gap-1 dark:text-gray-400">
                      <p className="transition-all duration-300 text-baseTextGray hover:text-primary-200">
                        Giving Back – Uganda Training Centers
                      </p>
                      <span className="items-center justify-start gap-2 text-xs font-normal text-gray-500 flex transition-all duration-300 dark:text-gray-400">
                        <Calendar size={12} className="text-primary-200" />
                        Oct 21, 2019
                      </span>
                    </div>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="items-center block p-3 rounded-md sm:flex transition-all duration-300 hover:bg-gray-700/30 dark:hover:bg-gray-700"
                  >
                    <img
                      className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0"
                      src="https://zozothemes.com/html/zegen/images/blog/thumb/blog_thumb1-80x80.jpg"
                      alt="Jese Leos image"
                    />
                    <div className="text-gray-600 flex flex-col gap-1 dark:text-gray-400">
                      <p className="transition-all duration-300 text-baseTextGray hover:text-primary-200">
                        Giving Back – Uganda Training Centers
                      </p>
                      <span className="items-center justify-start gap-2 text-xs font-normal text-gray-500 flex transition-all duration-300 dark:text-gray-400">
                        <Calendar size={12} className="text-primary-200" />
                        Oct 21, 2019
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Boletim de Notícias */}
            <div>
              <h2 className="relative mb-6 text-xl font-bold text-baseTextWhite pl-8 border-l-2 border-primary-200 ">
                <div className="w-6 h-[0.1rem] bg-primary-200 absolute -left-[0.79rem] top-2" />
                Boletim de Notícias
              </h2>
              <ul className="text-baseTextGray ">
                <li className="mb-4">
                  <span>
                    Inscreva-se em nosso boletim informativo semanal para ficar
                    atualizado sobre todas as novidades e eventos da Igreja
                    Zegen. Atualizações por e-mail sobre anúncios de novos
                    produtos, ideias para presentes, promoções especiais e muito
                    mais.
                  </span>
                </li>
                <li className="mb-4">
                  <div className="flex items-center justify-center">
                    <input
                      type="text"
                      placeholder="Endereço de e-mail"
                      className="w-full rounded-s-md h-10 border-none placeholder:text-sm "
                    />
                    <button className="h-10 rounded-e-md px-4 text-white bg-primary-200 transition-all duration-300 active:bg-primary-300 hover:bg-primary-400 ">
                      <SendHorizontal />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full bg-baseDark">
          <div className="mx-auto p-7 md:flex md:items-center md:justify-between max-w-screen-min-w-s-1390">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              <a
                href="https://rafaelpilartes.com/"
                className="transition-all duration-300 hover:text-primary-200"
              >
                RP❤️
              </a>
              - Direitos autorais © 2023 CCI . Desenhado por .{' '}
              <a
                href="https://tchossy.com/"
                className="transition-all duration-300 hover:text-primary-200"
              >
                Tchossy™
              </a>
            </span>

            <ul className="flex flex-wrap items-center mt-3 text-sm font-light text-baseTextGray sm:mt-0">
              <li>
                <a
                  href={routsNameMain.about}
                  className="mr-4 transition-all duration-300 hover:text-primary-200 md:mr-6 "
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href={routsNameMain.sermon}
                  className="mr-4 transition-all duration-300 hover:text-primary-200 md:mr-6"
                >
                  Sermão
                </a>
              </li>
              <li>
                <a
                  href={routsNameMain.prayerRequests}
                  className="mr-4 transition-all duration-300 hover:text-primary-200 md:mr-6"
                >
                  Pedidos de oração
                </a>
              </li>
              <li>
                <a
                  href={routsNameMain.contacts}
                  className="transition-all duration-300 hover:text-primary-200"
                >
                  Contactos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
