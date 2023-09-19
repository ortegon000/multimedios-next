import React from 'react'
import Link from 'next/link'
import IconDots from './icon-dots'
import NextImage from '../next-image'

export default function ListIcons (): React.JSX.Element {
  const menu = [
    {
      name: 'radio',
      url: '/radio/radio-1',
      icon: '/images/icons_border_black/radio.svg',
      iconHoverText: 'RADIO',
      iconHoverTextSizeClassName: '',
      position: { transform: 'translateX(-333%)' }
    },
    {
      name: 'tv',
      url: '/tv/tv-1',
      icon: '/images/icons_border_black/tv.svg',
      iconHover: '/images/icons_alt/tv.png',
      iconHoverTextSizeClassName: '',
      position: { transform: 'translateX(-198%)' }
    },
    {
      name: 'OOH',
      url: '/ooh/ooh-1',
      icon: '/images/icons_border_black/exterior.svg',
      iconHoverText: 'OOH',
      iconHoverTextSizeClassName: 'text-xl',
      position: { transform: 'translateX(-64%)' }
    },
    {
      name: 'Prensa',
      url: '/prensa/prensa-1',
      icon: '/images/icons_border_black/impresos.svg',
      iconHover: '/images/icons_alt/impresos.png',
      iconHoverTextSizeClassName: '',
      position: { transform: 'translateX(67%)' }
    },
    {
      name: 'digital',
      url: '/digital/digital-1',
      icon: '/images/icons_border_black/digital.svg',
      iconHover: '/images/icons_alt/digital.png',
      iconHoverTextSizeClassName: '',
      position: { transform: 'translateX(200%)' }
    },
    {
      name: 'experiencias',
      url: '/experiencias/exp-1',
      icon: '/images/icons_border_black/experiencias.svg',
      iconHoverText: 'EXPERIENCIAS',
      iconHoverTextSizeClassName: 'text-[8px]',
      position: { transform: 'translateX(335%)' }
    }
  ]

  return (
    <div className='overflow-hidden py-4'>
      <div className='relative'>
        <NextImage src='/images/icons_list.png' alt='' className='flex w-[95%] mx-auto' />

        <ul className='icons-list'>
          {menu.map((item, key) => (
            <li
              key={key}
              className='Menu-link absolute bottom-[8%] rounded-full left-0 right-0 m-auto h-[42%] w-[12%]'
              style={item.position}
            >
              <div className='circle-bg opacity-0 transition-all absolute inset-0 m-auto transform w-full h-full border border-grayDark bg-grayLight rounded-full' />

              <Link href={item.url} className='absolute z-50 w-full h-full block rounded-full'>
                <span className='icon absolute inset-0 flex justify-center items-center'>
                  <NextImage src={item.icon} alt='icon' className='h-8 w-8 md:w-10 md:h-10' />
                </span>

                <div className='hoverIcon opacity-0 absolute inset-0 flex justify-center items-center'>
                  <IconDots />

                  {item.iconHoverText !== undefined
                    ? (
                      <span
                        className={`${item.iconHoverTextSizeClassName} text-white font-bold`}
                      >
                        {item.iconHoverText}
                      </span>
                      )
                    : (
                      <NextImage
                        src={item.iconHover}
                        alt={`icono ${item.name}`}
                        className='h-8 w-8 md:w-10 md:h-10 flex items-center'
                      />
                      )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
