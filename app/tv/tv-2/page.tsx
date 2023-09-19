import React from 'react'
import ContentLayout from '../../content-layout'
import Component2 from '../../components/layouts/component2'
import ZoomImage from '@/app/components/zoom-image'

import { Metadata } from 'next'
import NextImage from '@/app/components/next-image'

export const metadata: Metadata = {
  title: 'Multimedios - Tv 2',
  description: 'Presentación multimedios'
}

const cities = [
  'MONTERREY 6.1',
  'LINARES 6.1',
  'CDMX 6.1',
  'MÉRIDA 6.1',
  'CANCÚN 6.1',
  'CHIAPAS 6.1',
  'GUADALAJARA 6.1',
  'TEPIC 6.1',
  'CHIHUAHUA 6.1',
  'CD. JUÁREZ 6.1',
  'EL PASO, TX. 6.1',
  'TORREÓN 6.1',
  'SALTILLO 6.1',
  'DURANGO 6.1',
  'LEÓN 6.1',
  'PUEBLA 6.1',
  'TLAXCALA 6.1',
  'CD. VICTORIA 6.1',
  'MANTE 6.1',
  'TAMPICO 6.1',
  'CD. VALLES 6.1',
  'REYNOSA 6.1',
  'MATAMOROS 6.1',
  'NUEVO LAREDO 6.1'
]

export default function Tv2 (): React.JSX.Element {
  return (
    <ContentLayout section='tv 2' background='1'>
      <Component2 col1={<Col1 />} col2={<Col2 />} subsection='tv-2' />
    </ContentLayout>
  )
}

function Col1 (): React.JSX.Element {
  return (
    <>
      <article className='bg-grayDark text-grayLight p-2 rounded-md'>
        <p className='text-center md:text-left'>
          <span className='text-lg font-bold'>
            Presencia en las siguientes ciudades
          </span>
        </p>
      </article>

      <article className='relative z-10 w-full md:w-64 p-2 border border-grayDark bg-grayLight rounded-md mt-4'>
        <ul className='text-xs leading-4 columns-3 md:columns-2'>
          {cities.map((city, key) => (
            <li key={key}>{city}</li>
          ))}
        </ul>
      </article>
    </>
  )
}

function Col2 (): React.JSX.Element {
  return (
    <div className='relative transition rounded-md mt-8 md:mt-0'>

      <div className='md:absolute top-0 right-0 z-10 bg-grayLight md:bg-transparent'>
        <div className='bg-grayDark text-grayLight rounded-md p-4 max-w-xs mx-auto relative'>
          <span className='text-3xl font-bold'>24 Ciudades</span>
          <br />
          <span className='text-xl'>Regionales</span>
          <NextImage
            src='/images/tv/map-icon.png'
            alt=''
            className='radio-users-icon w-12 h-12 !absolute bg-grayDark rounded-full border border-white top-0 left-0'
          />
        </div>

        <div className='max-w-xs mx-auto mb-5 md:mb-0'>
          <p className='text-3xl font-bold'>Más de 4</p>
          <p className='text-3xl'>millones</p>
          <p className='font-bold'>de Televidentes diario</p>
        </div>
      </div>

      <div className='md:pt-12 md:pr-12 pt-0 pr-0'>
        <ZoomImage image='/images/tv/cobertura-map.png' className='max-w-md md:bg-transparent mx-auto' />
      </div>
    </div>
  )
}
