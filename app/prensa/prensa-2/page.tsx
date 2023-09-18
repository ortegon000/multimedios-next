import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import NextImage from '@/app/components/next-image'

export const metadata: Metadata = {
  title: 'Multimedios - Prensa 2',
  description: 'Presentación multimedios'
}

const buttons = [
  {
    name: 'NACIONAL',
    number: '103,210'
  },
  {
    name: 'MONTERREY',
    number: '35,628'
  },
  {
    name: 'JALISCO',
    number: '34,831'
  },
  {
    name: 'LAGUNA',
    number: '16,078'
  },
  {
    name: 'TAMAULIPAS',
    number: '17,331'
  },
  {
    name: 'EDOMÉX',
    number: '24,871'
  },
  {
    name: 'LEÓN',
    number: '11,117'
  },
  {
    name: 'HIDALGO',
    number: '11,037'
  },
  {
    name: 'PUEBLA',
    number: '13,363'
  }
]

function Prensa (): React.JSX.Element {
  return (
    <ContentLayout section='prensa'>
      <section className='max-w-5xl mx-auto px-2 mt-4'>
        <h1 className='text-2xl font-bold text-center'>CIRCULACIÓN NACIONAL</h1>

        <div className='md:flex mt-4 gap-4'>
          <div className='mb-4 md:mb-0 md:w-1/3'>
            <NextImage src='/images/prensa/d3-1.png' alt='' className='hover:scale-110 w-[80%] md:w-[95%] mx-auto transition-transform hover:-rotate-12' />
          </div>

          <div className='mb-4 md:w-1/3'>
            <h2 className='text-xl mb-12 md:mb-4 text-center'>COBERTURA</h2>
            <div className='w-full bg-grayDark rounded-md p-4 text-grayLight relative pt-12 md:pt-4 md:pl-12'>
              <NextImage src='/images/prensa/d3-2.png' alt='' className='w-20 !absolute -translate-y-1/2 md:-translate-y-0 md:-translate-x-1/2 m-auto right-0 top-0 md:bottom-0 left-0 md:right-[unset]' />
              <p>
                <strong className='block mb-4'>
                  Con presencia en 9 de las
                  plazas más influyentes del
                  país.
                </strong>
                <span className='block mb-4'>
                  Circulación total: 267, 466
                  ejemplares diarios.
                </span>
                <span className='block'>
                  <strong>Pass along: 3 lectores
                    x ejemplar =
                  </strong> 802,39
                  impactos diarios.
                </span>
              </p>
            </div>
          </div>

          <div className='md:w-1/3 md:mt-10'>
            {
            buttons.map((item, key) => (
              <p key={key} className='flex items-center group'>
                <span className='bg-grayDark text-grayLight text-xs p-1 mb-1 rounded-md w-3/4 flex justify-between'>
                  MILENIO DIARIO {item.name}
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-4 h-4'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3' />
                  </svg>

                </span>
                <span className='ml-2 text-sm w-1/4 group-hover:underline'>{item.number}</span>
              </p>
            ))
          }
          </div>
        </div>
      </section>
    </ContentLayout>
  )
}

export default Prensa
