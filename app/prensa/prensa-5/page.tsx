import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import ZoomImage from '@/app/components/zoom-image'

export const metadata: Metadata = {
  title: 'Multimedios - Prensa 5',
  description: 'Presentación multimedios'
}

function Prensa (): React.JSX.Element {
  return (
    <ContentLayout section='prensa'>
      <section className='max-w-4xl mx-auto px-2 mt-4'>
        <h1 className='text-2xl font-bold text-center mb-2'>PERFIL DE LECTORÍA</h1>

        <p className='text-center mb-4 bg-grayDark text-grayLight p-2 rounded-md max-w-xl mx-auto'>
          Los lectores de MILENIO son personas en edad económicamente activa con
          poder de compra y de decisión de compra
        </p>

        <div className='flex flex-col md:flex-row gap-8 md:gap-4 mb-4 md:mb-0 items-center'>

          <div className='w-[80%] mx-auto'>
            <ZoomImage image='/images/prensa/d6-1.png' />
          </div>

          <span className='h-52 border border-grayDark relative hidden md:flex'>
            <span className='vertical-sliding-dot h-2 w-2 bg-grayDark rounded-full block absolute top-0 m-auto -translate-x-1/2' />
          </span>

          <div className='w-[80%] mx-auto'>
            <ZoomImage image='/images/prensa/d6-2.png' />
          </div>

          <span className='h-52 border border-grayDark relative hidden md:flex'>
            <span className='vertical-sliding-dot2 h-2 w-2 bg-grayDark rounded-full block absolute top-0 m-auto -translate-x-1/2' />
          </span>

          <div className='w-[80%] mx-auto'>
            <ZoomImage image='/images/prensa/d6-3.png' />
          </div>

        </div>

      </section>
    </ContentLayout>
  )
}

export default Prensa
