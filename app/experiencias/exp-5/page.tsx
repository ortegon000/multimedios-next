import ContentLayout from '../../content-layout'
import React from 'react'
import { Metadata } from 'next'
import ZoomImage from '@/app/components/zoom-image'
import NextImage from '@/app/components/next-image'

export const metadata: Metadata = {
  title: 'Multimedios - Experiancias 5',
  description: 'Presentación multimedios'
}

export default function RadioD1 (): React.JSX.Element {
  return (
    <ContentLayout section='experiencias'>
      <>
        <section className='max-w-4xl mx-auto px-2 mt-8'>
          <h1 className='text-2xl font-bold text-center relative'>
            <span className='border border-grayDark bg-grayLight py-2 px-4 rounded-md relative z-10'>FOROS MILENIO</span>
            <NextImage src='/images/experiencias/lines_arrow.png' alt='' className='hidden md:flex absolute top-1/2 w-[80%] left-1/2 -translate-x-1/2' />
          </h1>

          <div className='mt-4 flex flex-col md:flex-row md:mt-16 gap-4 px-8 items-start'>
            <div>
              <ZoomImage image='/images/experiencias/d5-1.png' />
            </div>
            <div className='md:mt-6'>
              <ZoomImage image='/images/experiencias/d5-2.png' />
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <ZoomImage image='/images/experiencias/d5-3.png' />
              </div>
            </div>
          </div>
        </section>

      </>
    </ContentLayout>
  )
}
