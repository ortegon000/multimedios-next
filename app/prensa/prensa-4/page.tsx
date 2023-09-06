import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import ZoomImage from '@/app/components/zoom-image'

export const metadata: Metadata = {
  title: 'Multimedios - Prensa 4',
  description: 'Presentación multimedios'
}

const images = [
  '/images/prensa/d5-1.png',
  '/images/prensa/d5-2.png',
  '/images/prensa/d5-3.png'
]

function Prensa (): React.JSX.Element {
  return (
    <ContentLayout section='prensa'>
      <section className='max-w-5xl mx-auto px-2 mt-4'>
        <h1 className='text-2xl font-bold text-center mb-2'>ALIANZAS TÁCTICAS</h1>

        <p className='text-center mb-4'>
          Con los medios internacionales de mayor prestigio en el mundo.
        </p>

        <div className='md:flex gap-4'>
          <div className='flex flex-col md:flex-row md:w-2/3 gap-2 mb-4 md:mb-0'>
            {
              images.map((image, key) => (
                <div key={key} className='w-[80%] mx-auto'>
                  <ZoomImage image={image} className='' />
                </div>
              ))
            }
          </div>
          <div className='md:w-1/2 bg-grayLight/50 backdrop-blur rounded-md p-2'>
            <div className='mb-1'>
              <p className='bg-grayDark inline-block text-grayLight px-2 py-1 rounded-md'>EL MUNDO (sección diaria)</p>
              <p className='pl-4'>El periódico líder en noticias de España</p>
            </div>
            <div className='mb-1'>
              <p className='bg-grayDark inline-block text-grayLight px-2 py-1 rounded-md'>FINANCIAL TIMES (sección diaria)</p>
              <p className='pl-4'>El mejor diario británico financiero.</p>
            </div>
            <div className='mb-1'>
              <p className='bg-grayDark inline-block text-grayLight px-2 py-1 rounded-md'>FT MERCADOS (semanal)</p>
              <p className='pl-4'>Con las mejores notas del Financial Times,
                Reportajes y entrevistas.
              </p>
            </div>
            <div className=''>
              <p className='bg-grayDark inline-block text-grayLight px-2 py-1 rounded-md'>CINCO DIAS (suplemento semanal) </p>
              <p className='pl-4'>Uno de los periódicos especializados en
                economía más reconocidos de España y en
                el mundo empresarial.
              </p>
            </div>
          </div>
        </div>

      </section>
    </ContentLayout>
  )
}

export default Prensa
