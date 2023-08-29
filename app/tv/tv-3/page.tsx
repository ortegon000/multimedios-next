import ContentLayout from '../../content-layout'
import React from 'react'
import Link from 'next/link'
import Button from '../../components/button'

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

export default function Tv1 (): React.JSX.Element {
  return (
    <ContentLayout section='tv 3' background='1'>
      <section className='max-w-4xl mt-10 mx-auto'>
        <h1 className='text-3xl font-bold text-center'>Programas</h1>
        <div className='mt-4 flex flex-wrap gap-4 justify-center items-center'>
          {buttons.map((item, key) => (
            <div className='w-[30%]' key={key}>
              <Link href={item.url} className='flex justify-center border border-grayDark rounded-md font-bold w-full py-4 px-2 hover:scale-110 hover:shadow-xl transition-all'>
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
