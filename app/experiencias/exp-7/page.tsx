import ContentLayout from '../../content-layout'
import React from 'react'
import { Metadata } from 'next'
import ZoomImage from '@/app/components/zoom-image'

export const metadata: Metadata = {
  title: 'Multimedios - Experiancias 7',
  description: 'Presentación multimedios'
}

export default function RadioD1 (): React.JSX.Element {
  return (
    <ContentLayout section='experiencias'>
      <>
        <section className='max-w-4xl mx-auto px-2 mt-8'>

          <h1 className='text-2xl font-bold text-center mb-6'>
            <span className='border border-grayDark rounded-md px-4 py-2'>FOROS VIRTUALES</span>
          </h1>

          <div className=''>
            <p className='text-center text-lg mb-4'>
              Nuestro contacto con la información ha cambiado y lo sabemos, y en Milenio ofrecemos Foros Virtuales para llegar a la audiencia de Milenio con temáticas actuales y expertos diversos.
            </p>
            <ZoomImage image='/images/experiencias/d7.png' className='max-w-2xl mx-auto' />
          </div>
        </section>

      </>
    </ContentLayout>
  )
}
