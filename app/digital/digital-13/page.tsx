import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Link from 'next/link'
import NextImage from '@/app/components/next-image'

const buttons = [
  {
    logo: '/images/digital/d13-1.png',
    url: '/digital/digital-14',
    height: 'h-12'
  },
  {
    logo: '/images/digital/d13-2.png',
    url: '/digital/digital-15',
    height: 'h-12'
  },
  {
    logo: '/images/digital/d13-3.png',
    url: '/digital/digital-16',
    height: 'h-12'
  },
  {
    logo: '/images/digital/d13-4.png',
    url: '/digital/digital-17',
    height: 'h-12'
  },
  {
    logo: '/images/digital/d13-5.png',
    url: '/digital/digital-18',
    height: 'h-12'
  },
  {
    logo: '/images/digital/d13-6.png',
    url: '/digital/digital-19',
    height: 'h-8'
  },
  {
    logo: '/images/digital/d13-7.png',
    url: '/digital/digital-20',
    height: 'h-6'
  },
  {
    logo: '/images/digital/d13-8.png',
    url: '/digital/digital-21',
    height: 'h-12'
  },
  {
    logo: '/images/digital/d13-9.png',
    url: '/digital/digital-22',
    height: 'h-12'
  },
  {
    logo: '/images/digital/d13-10.png',
    url: '/digital/digital-23',
    height: 'h-12'
  }
]

export const metadata: Metadata = {
  title: 'Multimedios - Digital 13',
  description: 'Presentación multimedios'
}

function Digital (): React.JSX.Element {
  return (
    <ContentLayout section='digital'>
      <section className='max-w-4xl mx-auto px-2 mt-4'>
        <h1 className='text-2xl font-bold text-center mb-4'>CASOS DE ÉXITO</h1>
        <div className='flex flex-wrap gap-4 justify-center'>
          {
            buttons.map((button, key) => (
              <Link href={button.url} key={key} className='flex justify-center items-center p-2 border border-grayDark rounded-md w-[40%] md:w-[18%] hover:scale-110 transition-transform bg-grayLight'>
                <NextImage src={button.logo} alt='' className={button.height} heightFull />
              </Link>
            ))
          }
        </div>
      </section>
    </ContentLayout>
  )
}

export default Digital
