import ContentLayout from '../../content-layout'
import React from 'react'
import { Metadata } from 'next'
import ZoomImage from '@/app/components/zoom-image'
import NextImage from '@/app/components/next-image'

export const metadata: Metadata = {
  title: 'Multimedios - Experiancias 3',
  description: 'Presentación multimedios'
}

export default function RadioD1 (): React.JSX.Element {
  return (
    <ContentLayout section='experiencias'>
      <>
        <section className='max-w-4xl mx-auto px-2 mt-8'>
          <h1 className='text-2xl font-bold text-center relative'>
            <span className='border border-grayDark bg-grayLight py-2 px-4 rounded-md relative z-10'>Estrategia Multiplataforma</span>
            <NextImage src='/images/experiencias/lines_arrow.png' alt='' className='hidden md:flex absolute top-1/2 w-[80%] left-1/2 -translate-x-1/2' />
          </h1>

          <div className='mt-4 flex flex-col md:flex-row md:mt-0 gap-4 px-8 items-center'>
            <div>
              <ZoomImage image='/images/experiencias/d3-1.png' />
              <p className='text-xl font-bold text-center'>Prensa</p>
            </div>
            <div>
              <ZoomImage image='/images/experiencias/d3-2.png' />
              <p className='text-xl font-bold text-center'>Televisión</p>
            </div>
            <div>
              <div className='flex items-start gap-2'>
                <ZoomImage image='/images/experiencias/d3-3.png' />
                <ZoomImage image='/images/experiencias/d3-4.png' />
              </div>
              <p className='text-xl font-bold text-center'>Digital</p>
            </div>
          </div>
        </section>

      </>
    </ContentLayout>
  )
}
