import ContentLayout from '../../content-layout'
import Component1 from '../../components/layouts/component1'
import Button from '../../components/button'
import React from 'react'
import { Metadata } from 'next'
import NextImage from '@/app/components/next-image'

export const metadata: Metadata = {
  title: 'Multimedios - Radio 1',
  description: 'Presentación multimedios'
}

export default function RadioD1 (): React.JSX.Element {
  return (
    <ContentLayout section='radio 1'>
      <Component1
        title='5 de cada 10 nos escuchan en Monterrey'
        col1={<Col1 />}
        col2={<Col2 />}
        col3={<Col3 />}
        subsection='radio-1'
      />
    </ContentLayout>
  )
}

function Col1 (): React.JSX.Element {
  return (
    <article className='card bg-grayDark hover:bg-red-300 transition-colors animated h-full'>
      <NextImage
        src='/images/radio/chica_con_microfono.png'
        alt='chica con microfono'
        className='h-full w-2/3 md:w-full rounded-md'
        heightFull
      />

      <div className='card-info absolute top-10 right-4'>
        <span className='card-title text-white top-8 right-6 text-4xl font-bold block text-right'>
          58
        </span>
        <span className='card-description text-white top-20 text-2xl right-6 uppercase text-right block'>
          Estaciones <br /> de radio
        </span>
      </div>

      <span className='absolute bottom-4 right-4'>
        <Button url='/radio/radio-2' text='Ver cobertura' />
      </span>
    </article>
  )
}

function Col2 (): React.JSX.Element {
  return (
    <article className='card bg-grayLight rounded-md p-4 text-center'>
      <h3 className='font-bold text-xl mb-4'>Multimedios Radio</h3>
      <p className='text-sm'>
        Líderes en el norte del país con más de 55 estaciones, siempre estando
        en el top of mind de los radioescuchas y dentro del top ten con todas
        nuestras estaciones.
      </p>
      <NextImage
        src='/images/line_dot.png'
        alt='linea con un punto centrado'
        className='my-4 mx-auto w-52'
      />
      <p className='font-bold text-center'>
        El medio con mayor credibilidad y call to action
      </p>
      <span className='flex mt-4 justify-center'>
        <Button url='/radio/radio-2' text='Ver cobertura' dark />
      </span>
    </article>
  )
}

function Col3 (): React.JSX.Element {
  return (
    <article className='card bg-grayDark hover:bg-red-300 transition-colors animated h-full'>
      <NextImage
        src='/images/radio/chica_con_audifonos.png'
        alt='chica con microfono'
        className='h-full md:w-full rounded-md float-right'
        heightFull
      />

      <div className='card-info absolute bottom-20 left-4'>
        <span className='card-title text-white top-8 right-6 text-2xl font-bold block'>
          Más de <br /> 60 años
        </span>
        <span className='card-description text-white text-xl top-20 right-6 block'>
          de experiencia
        </span>
      </div>

      <span className='absolute bottom-4 left-4'>
        <Button url='/radio/radio-2' text='Ver cobertura' />
      </span>
    </article>
  )
}
