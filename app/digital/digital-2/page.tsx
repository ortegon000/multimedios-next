import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Link from 'next/link'

const buttons = [
  {
    logo: '/images/digital/d2-1.png',
    url: '#',
    height: 'h-8'
  },
  {
    logo: '/images/digital/d2-2.png',
    url: '#',
    height: 'h-8'
  },
  {
    logo: '/images/digital/d2-3.png',
    url: '#',
    height: 'h-12'
  },
  {
    logo: '/images/digital/d2-4.png',
    url: '#',
    height: 'h-10'
  },
  {
    logo: '/images/digital/d2-5.png',
    url: '#',
    height: 'h-8'
  },
  {
    logo: '/images/digital/d2-6.png',
    url: '#',
    height: 'h-12'
  },
  {
    logo: '/images/digital/d2-7.png',
    url: '#',
    height: 'h-10'
  },
  {
    logo: '/images/digital/d2-8.png',
    url: '#',
    height: 'h-12'
  },
  {
    logo: '/images/digital/d2-9.png',
    url: '#',
    height: 'h-12'
  }
]

export const metadata: Metadata = {
  title: 'Multimedios - Digital 2',
  description: 'Presentación multimedios'
}

function Digital (): React.JSX.Element {
  return (
    <ContentLayout section='prensa'>
      <section className='max-w-4xl mx-auto px-2 mt-4'>
        <div className='flex flex-wrap gap-4 justify-center'>
          {
            buttons.map((button, key) => (
              <Link href={button.url} key={key} className='flex justify-center items-center p-2 border border-grayDark rounded-md w-[40%] md:w-[30%] hover:scale-110 transition-transform bg-grayLight'>
                <img src={button.logo} alt='' className={button.height} />
              </Link>
            ))
          }
        </div>
      </section>
    </ContentLayout>
  )
}

export default Digital
