import Dropdown from './Dropdown'
import { Phone, Mail, Dot, UserCircle2, HeartHandshake } from 'lucide-react'
import { FaDotCircle } from 'react-icons/fa'
import { BaseButton } from './buttons/baseButton'
import { routsNameMain } from '../data/routsName'

export const Header = () => {
  const dropdownItemsChurch = [
    { label: 'Sobre', link: routsNameMain.about },
    { label: 'Depoimentos', link: routsNameMain.depositions }
  ]
  const dropdownItemsContain = [
    { label: 'Cultos', link: routsNameMain.cults },
    { label: 'Plano de leitura', link: routsNameMain.readingPlan },
    { label: 'Download', link: routsNameMain.download },
    { label: 'Sermão', link: routsNameMain.sermon },
    { label: 'Galeria', link: routsNameMain.gallery }
  ]
  const dropdownItemsJoin = [
    { label: 'Grupos', link: routsNameMain.groups },
    { label: 'Pedidos de oração', link: routsNameMain.prayerRequests },
    { label: 'Célula', link: routsNameMain.cell }
  ]

  return (
    <header className="fixed z-30 w-full p-4 font-semibold">
      {/* Container */}
      <div className="bg-white flex items-center justify-between px-4">
        {/* Logo */}
        <div className="customBaseMargin">
          <img src="/logo.png" alt="Logo CCI" className="w-[250px] h-[50px] " />
        </div>

        {/* Links */}
        <div className="w-full flex items-center justify-between flex-col">
          {/* Top */}
          <div className="w-full flex items-center justify-between flex-row border-b border-l border-r border-gray-300">
            {/* Contacts */}
            <div className="flex items-center justify-between flex-row gap-4">
              <div className="customBasePadding gap-2">
                <Phone size={14} /> (+244) 923 414 621
              </div>
              <div className="customBasePadding gap-2">
                <Mail size={14} /> geral@rafaelpilarte.com
              </div>
            </div>

            {/* Links */}
            <ul className="flex items-center justify-between flex-row gap-4">
              <li className="customBasePadding hover:text-primary-200 transition-all duration-200">
                <a href={routsNameMain.events}>Eventos</a>
              </li>
              <li className="customBasePadding hover:text-primary-200 transition-all duration-200 ">
                <a
                  href={routsNameMain.cults}
                  className="relative flex items-center justify-center flex-row gap-1"
                >
                  <span className="relative mr-1 flex h-[0.60rem] w-[0.60rem]">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-[0.60rem] w-[0.60rem] bg-primary-200"></span>
                  </span>
                  Cultos
                </a>
              </li>
              <li className="customBasePadding hover:text-primary-200 transition-all duration-200">
                <a href={routsNameMain.ministry}>Ministério</a>
              </li>
            </ul>

            {/* Lang */}
            {/* <div className="customBasePadding">
              <div className="z-10">
                <Dropdown title="Linguagem" items={dropdownItemsLang} />
              </div>
            </div> */}
          </div>

          {/* Bottom */}
          <div className="w-full flex items-center justify-between flex-row border-l border-r border-gray-300">
            {/* Links Nav */}
            <nav>
              <ul className="flex items-center justify-between flex-row">
                <li className="customBasePadding hover:text-primary-200 transition-all duration-200">
                  <a href={routsNameMain.home}>Inicio</a>
                </li>
                <li className="py-4 flex justify-center items-center ">
                  <Dropdown title="A igreja" items={dropdownItemsChurch} />
                </li>
                <li className="py-4 flex justify-center items-center ">
                  <Dropdown title="Conteúdo" items={dropdownItemsContain} />
                </li>
                <li className="py-4 flex justify-center items-center ">
                  <Dropdown title="Participe" items={dropdownItemsJoin} />
                </li>
                <li className="customBasePadding hover:text-primary-200 transition-all duration-200">
                  <a href={routsNameMain.blog}>Blog</a>
                </li>
                <li className="customBasePadding hover:text-primary-200 transition-all duration-200">
                  <a href={routsNameMain.contacts}>Contactos</a>
                </li>
              </ul>
            </nav>

            {/* Buttons Use */}
            <div className="customBasePadding">
              <BaseButton
                icon={UserCircle2}
                title="Fazer login"
                styleBtn="ShineLight"
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="w-full max-w-[10rem] customBaseMargin">
          <BaseButton
            icon={HeartHandshake}
            title="DOAR AQUI"
            styleBtn="LeftToRight"
          />
        </div>
      </div>
    </header>
  )
}
