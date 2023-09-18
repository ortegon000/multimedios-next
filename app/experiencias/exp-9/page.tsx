import ContentLayout from '../../content-layout'
import React from 'react'
import { Metadata } from 'next'
import ZoomImage from '@/app/components/zoom-image'

export const metadata: Metadata = {
  title: 'Multimedios - Experiancias 9',
  description: 'Presentación multimedios'
}

export default function RadioD1 (): React.JSX.Element {
  return (
    <ContentLayout section='experiencias'>
      <>

        <section className='max-w-4xl mx-auto px-2 mt-4'>
          <h1 className='text-2xl font-bold text-center max-w-2xl mx-auto'>En promedio al día somos impactados de 3 a 5 mil mensajes publicitarios</h1>

          <div className='mt-4 md:flex px-4'>
            <div className='mb-6 md:mb-0'>
              <ZoomImage image='/images/experiencias/d9-1.png' />
              <div className='flex justify-center'>
                <span className='bg-grayDark roudned-full text-grayLight px-4 py-2 mt-2 inline-block rounded-md'>
                  Lunes - Viernes
                </span>
              </div>
            </div>
            <div className='mb-6 md:mb-0'>
              <ZoomImage image='/images/experiencias/d9-2.png' />
              <div className='flex justify-center'>
                <span className='bg-grayDark roudned-full text-grayLight px-4 py-2 mt-2 inline-block rounded-md'>
                  Sábado - Domingo
                </span>
              </div>
            </div>
            <div className='mb-6 md:mb-0'>
              <ZoomImage image='/images/experiencias/d9-3.png' />
            </div>
          </div>
        </section>

      </>
    </ContentLayout>
  )
}
