'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import NextImage from './next-image'

export default function BottomMenu ({
  section = 'undefined'
}: {
  section: string;
}): React.JSX.Element {
  const pathName = usePathname()

  const basePath = pathName.split('-')[0]
  const number = Number(pathName.split('-')[1])

  const nextNumber = number + 1
  const nextPath = `${basePath}-${nextNumber}`

  const prevNumber = number - 1
  const prevPath = `${basePath}-${prevNumber}`

  const filesQuantity = [
    { name: 'radio', limit: 18 },
    { name: 'tv', limit: 62 },
    { name: 'ooh', limit: 13 },
    { name: 'prensa', limit: 11 },
    { name: 'digital', limit: 23 },
    { name: 'experiencias', limit: 9 }
  ]

  const filesSection = section.split(' ')[0]
  const result = filesQuantity.filter((obj) => {
    return obj.name === filesSection
  })
  const limit = result[0]?.limit

  return (
    <div className='absolute bg-white/50 rounded-lg backdrop-blur right-4 bottom-4 flex flex-row items-center justify-end gap-4'>
      {number > 1 && (
        <div>
          <Link
            href={prevPath}
            className='group flex items-center justify-center transition'
          >
            <span className='group-hover:bg-grayDark px-2 group-hover:text-grayLight rounded-full py-1 transition-all'>
              Atrás
            </span>
            <NextImage src='/images/back_arrow.png' alt='' className='h-10 w-10' />
          </Link>
        </div>
      )}

      <div>
        <Link
          href='/menu'
          className='font-medium text-4xl transition-colors rounded-full p-2 w-12 h-12 flex justify-center items-center hover:bg-[#484A57] hover:text-white'
        >
          M
        </Link>
      </div>

      {number < limit && (
        <div>
          <Link
            href={nextPath}
            className='group flex items-center justify-center transition'
          >
            <NextImage src='/images/next_arrow.png' alt='' className='h-10 w-10' />
            <span className='group-hover:bg-grayDark px-2 group-hover:text-grayLight rounded-full py-1 transition-all'>
              Siguiente
            </span>
          </Link>
        </div>
      )}
    </div>
  )
}
