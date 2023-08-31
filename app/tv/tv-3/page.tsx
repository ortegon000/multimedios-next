import ContentLayout from '../../content-layout'
import React from 'react'
import Link from 'next/link'
import Button from '../../components/button'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multimedios - Tv 3',
  description: 'Presentación multimedios'
}

const buttons = [
  {
    name: 'NOTICIAS MTY',
    url: 'tv-4'
  },
  {
    name: 'DEPORTES MTY',
    url: 'tv-18'
  },
  {
    name: 'ENTRETENIMIENTO MTY',
    url: 'tv-28'
  },
  {
    name: 'NOTICIAS CDMX',
    url: 'tv-9'
  },
  {
    name: 'DEPORTES CDMX',
    url: 'tv-27'
  },
  {
    name: 'ENTRETENIMIENTO CDMX',
    url: 'tv-34'
  },
  {
    name: 'BARRA NOCTURNA NACIONAL',
    url: 'tv-43'
  }
]

export default function Tv3 (): React.JSX.Element {
  return (
    <ContentLayout section='tv 3' background='1'>
      <section className='max-w-4xl mt-4 mx-auto'>
        <h1 className='text-2xl font-bold text-center'>Programas</h1>
        <div className='mt-4 grid grid-cols-2 md:grid-cols-3 gap-2 px-4'>
          {buttons.map((item, key) => (
            <div className={key === buttons.length - 1 ? 'md:col-start-2' : ''} key={key}>
              <Link href={item.url} className='border border-grayDark rounded-md font-bold w-full py-4 px-2 hover:scale-110 hover:shadow-xl transition-all text-xs md:text-sm text-center h-full flex justify-center items-center '>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className='flex justify-center mt-8'>
          <Button
            url='/tv/tv-59'
            text='VER PROGRAMAS POR PLAZA'
            dark
            className='text-sm'
          />
        </div>
      </section>
    </ContentLayout>
  )
}
