import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import ZoomImage from '@/app/components/zoom-image'

export const metadata: Metadata = {
  title: 'Multimedios - Prensa 6',
  description: 'Presentación multimedios'
}

function Prensa (): React.JSX.Element {
  return (
    <ContentLayout section='prensa'>
      <section className='max-w-4xl mx-auto px-2 mt-4'>
        <h1 className='text-2xl font-bold text-center mb-4'>EDICIONES ESPECIALES / SUPLEMENTOS</h1>

        <div className='md:flex md:gap-8'>
          <div className='mb-8 md:mb-0'>
            <p className='border border-grayDark p-2 rounded-md mb-4'>
              Especiales enfocados en temas de interés, con
              frecuencia constante. Contenido especializado al
              estilo Milenio.
            </p>
            <div className='max-w-[80%] md:max-w-full mx-auto mb-4'>
              <ZoomImage image='/images/prensa/d7-1.png' className='md:w-full' />
            </div>

            <div className='max-w-[80%] mx-auto mb-4 md:max-w-full'>
              <ZoomImage image='/images/prensa/d7-2.png' />
            </div>
          </div>

          <span className='hidden md:flex h-64 border-l-2 border-grayDark m-auto' />

          <div>
            <p className='border border-grayDark p-2 rounded-md mb-4'>
              Suplementos poderosos con la mejor calidad
              editorial, diseño dinámico y formato premium
              (tamaño diferenciado, forros couché).
            </p>
            <div className='max-w-[80%] md:max-w-full mx-auto mb-4'>
              <ZoomImage image='/images/prensa/d7-3.png' />
            </div>
          </div>
        </div>
      </section>
    </ContentLayout>
  )
}

export default Prensa
