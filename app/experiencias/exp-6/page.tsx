import ContentLayout from '../../content-layout'
import React from 'react'
import { Metadata } from 'next'
import ZoomImage from '@/app/components/zoom-image'

export const metadata: Metadata = {
  title: 'Multimedios - Experiancias 6',
  description: 'Presentación multimedios'
}

export default function RadioD1 (): React.JSX.Element {
  return (
    <ContentLayout section='experiencias'>
      <>
        <section className='max-w-4xl mx-auto px-2 mt-8'>
          <div className='md:flex items-center gap-4'>

            <div className='mb-4 md:w-[60%]'>
              <ZoomImage image='/images/experiencias/d6.png' />
            </div>

            <div className='md:w-[40%]'>
              <h1 className='text-2xl font-bold text-center md:text-left border border-grayDark rounded-md p-4'>
                FOROS MILENIO
                <br />
                <span className='font-normal'>Recap Multiplataforma</span>
              </h1>
            </div>
          </div>
        </section>

      </>
    </ContentLayout>
  )
}
