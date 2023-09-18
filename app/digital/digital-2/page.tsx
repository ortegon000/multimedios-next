import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Link from 'next/link'
import NextImage from '@/app/components/next-image'

const buttons = [
  {
    logo: '/images/digital/d2-1.png',
    url: '/digital/digital-3',
    height: 'h-8'
  },
  {
    logo: '/images/digital/d2-2.png',
    url: '/digital/digital-4',
    height: 'h-8'
  },
  {
    logo: '/images/digital/d2-3.png',
    url: '/digital/digital-5',
    height: 'h-12'
  },
  {
    logo: '/images/digital/d2-4.png',
    url: '/digital/digital-6',
    height: 'h-10'
  },
  {
    logo: '/images/digital/d2-5.png',
    url: '/digital/digital-7',
    height: 'h-8'
  },
  {
    logo: '/images/digital/d2-6.png',
    url: '/digital/digital-8',
    height: 'h-12'
  },
  {
    logo: '/images/digital/d2-7.png',
    url: '/digital/digital-9',
    height: 'h-10'
  },
  {
    logo: '/images/digital/d2-8.png',
    url: '/digital/digital-10',
    height: 'h-12'
  },
  {
    logo: '/images/digital/d2-9.png',
    url: '/digital/digital-11',
    height: 'h-12'
  }
]

export const metadata: Metadata = {
  title: 'Multimedios - Digital 2',
  description: 'Presentación multimedios'
}

function Digital (): React.JSX.Element {
  return (
    <ContentLayout section='digital'>
      <section className='max-w-4xl mx-auto px-2 mt-4'>
        <div className='mb-4'>
          <NextImage src='/images/m.png' alt='' className='h-12 w-12 mx-auto' />
          <p className='text-center mt-2'>HOLDING DIGITAL</p>
        </div>
        <div className='flex flex-wrap gap-4 justify-center'>
          {
            buttons.map((button, key) => (
              <Link href={button.url} key={key} className='flex justify-center items-center p-2 border border-grayDark rounded-md w-[40%] md:w-[30%] hover:scale-110 transition-transform bg-grayLight'>
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
