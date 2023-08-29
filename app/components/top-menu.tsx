import React from 'react'
import TopMenuLine from './top-menu-line'
import Link from 'next/link'

const menu = [
  {
    name: 'radio',
    url: '/radio/radio-1',
    icon: '/images/icons_border_black/radio.svg',
    dotPosition: 'left-0',
    direction: 'left-10'
  },
  {
    name: 'tv',
    url: '/tv/tv-1',
    icon: '/images/icons_border_black/tv.svg',
    iconActive: '/images/icons_alt/tv.png',
    dotPosition: 'left-20',
    direction: 'left-0'
  },
  {
    name: 'ooh',
    url: '/ooh/ooh-1',
    icon: '/images/icons_border_black/exterior.svg',
    iconActive: '/images/icons_alt/exterior.png',
    class: '',
    dotPosition: 'left-40',
    direction: 'left-0'
  },
  {
    name: 'prensa',
    url: '/prensa/prensa-1',
    icon: '/images/icons_border_black/impresos.svg',
    iconActive: '/images/icons_alt/impresos.png',
    class: '',
    dotPosition: 'right-40',
    direction: 'right-0'
  },
  {
    name: 'digital',
    url: '/digital/digital-1',
    icon: '/images/icons_border_black/digital.svg',
    iconActive: '/images/icons_alt/digital.png',
    dotPosition: 'right-20',
    direction: 'right-0'
  },
  {
    name: 'experiencias',
    url: '/experiencias/exp-1',
    icon: '/images/icons_border_black/experiencias.svg',
    class: 'text-[7px]',
    dotPosition: 'right-0',
    direction: 'right-10'
  }
]

let dotPosition = ''
let direction = ''

export default function TopMenu ({
  section = 'undefined'
}: {
  section: string;
}): React.JSX.Element {
  return (
    <nav className='pt-4'>
      <ul className='flex justify-center items-center gap-4 font-semibold text-sm [&>li]:border-2 [&>li]:border-black [&>li]:rounded-full [&>li>a>svg]:p-2 [&>li>a]:w-12 [&>li>a]:h-12 [&>li>a]:flex [&>li>a]:justify-center [&>li>a]:items-center'>
        {menu.map((item, key) => {
          dotPosition = item.name === section.split(' ')[0] ? item.dotPosition : dotPosition

          direction = item.name === section.split(' ')[0] ? item.direction : direction

          return (
            <li
              key={key}
              className={`transition hover:scale-110 bg-grayLight ${
                section.split(' ')[0] === item.name &&
                'scale-125 !border-4 hover:scale-125 !bg-grayDark text-white'
              }`}
            >
              <Link
                href={item.url}
                className={`uppercase cursor-pointer ${item.class}`}
              >
                {section.split(' ')[0] === item.name
                  ? (
                      item.iconActive !== undefined
                        ? (
                          <img src={item.iconActive} className='h-8' />
                          )
                        : (
                            item.name
                          )
                    )
                  : (
                    <img
                      src={item.icon}
                      alt={`icono ${item.name}`}
                      className='h-8'
                    />
                    )}
              </Link>
            </li>
          )
        })}
      </ul>

      <TopMenuLine dotPosition={dotPosition} direction={direction} />
    </nav>
  )
}
