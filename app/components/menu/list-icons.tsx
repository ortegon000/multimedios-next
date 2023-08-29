import React from 'react'
import Icon from './icon'

export default function ListIcons (): React.JSX.Element {
  const menu = [
    {
      name: 'radio',
      url: '/radio/radio-1',
      icon: '/images/icons_border_black/radio.svg',
      iconHoverText: 'RADIO',
      iconHoverTextSizeClassName: 'text-xl',
      position: { transform: 'translateX(-352%)' }
    },
    {
      name: 'tv',
      url: '/tv/tv-1',
      icon: '/images/icons_border_black/tv.svg',
      iconHover: '/images/icons_alt/tv.png',
      iconHoverTextSizeClassName: '',
      position: { transform: 'translateX(-209%)' }
    },
    {
      name: 'OOH',
      url: '/ooh/ooh-1',
      icon: '/images/icons_border_black/exterior.svg',
      iconHoverText: 'OOH',
      iconHoverTextSizeClassName: 'text-xl',
      position: { transform: 'translateX(-67%)' }
    },
    {
      name: 'Prensa',
      url: '/prensa/prensa-1',
      icon: '/images/icons_border_black/impresos.svg',
      iconHover: '/images/icons_alt/impresos.png',
      iconHoverTextSizeClassName: '',
      position: { transform: 'translateX(70%)' }
    },
    {
      name: 'digital',
      url: '/digital/digital-1',
      icon: '/images/icons_border_black/digital.svg',
      iconHover: '/images/icons_alt/digital.png',
      iconHoverTextSizeClassName: '',
      position: { transform: 'translateX(210%)' }
    },
    {
      name: 'experiencias',
      url: '/experiencias/exp-1',
      icon: '/images/icons_border_black/experiencias.svg',
      iconHoverText: 'EXPERIENCIAS',
      iconHoverTextSizeClassName: 'text-[8px]',
      position: { transform: 'translateX(352%)' }
    }
  ]

  return (
    <div className='relative'>
      <img src='/images/icons_list.png' alt='' />

      <ul className='icons-list'>
        {menu.map((item, key) => (
          <li
            key={key}
            className='Menu-link absolute bottom-[8%] rounded-full left-0 right-0 m-auto h-[40%] w-[12%]'
            style={item.position}
          >
            <div className='circle-bg opacity-0 transition-all absolute inset-0 m-auto transform w-full h-full border border-grayDark bg-grayLight rounded-full' />

            <Icon item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
