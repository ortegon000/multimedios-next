import Link from 'next/link'
import IconDots from './icon-dots'
import React from 'react'

export default function Icon ({ item }: {item: any}): React.JSX.Element {
  return (
    <Link href={item.url} className='absolute z-50 w-full h-full block rounded-full'>
      <span className='icon absolute inset-0 flex justify-center items-center'>
        <img src={item.icon} alt='icon' className='h-12 w-12' />
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
            <img
              src={item.iconHover}
              alt={`icono ${item.name}`}
              className='h-10'
            />
            )}
      </div>
    </Link>
  )
}
