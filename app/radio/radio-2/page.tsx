'use client'
import React from 'react'
import ContentLayout from '../../content-layout'
import Component2 from '../../components/layouts/component2'
import Button from '../../components/button'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function RadioD2 (): React.JSX.Element {
  return (
    <ContentLayout section='radio 2'>
      <Component2 col1={<Col1 />} col2={<Col2 />} subsection='radio-2' />
    </ContentLayout>
  )
}

function Col1 (): React.JSX.Element {
  return (
    <article className='bg-grayDark text-grayLight p-4 rounded-md'>
      <p className='text-sm'>
        <span className='text-xl font-bold'>COBERTURA</span>
        <br />
        <span className='text-xl font-bold'>58</span> ESTACIONES DE RADIO <br />
        <span className='text-xl font-bold'>13</span> ESTADOS <br />
        <span className='text-xl font-bold'>27</span> CIUDADES <br />
        <span className='block w-20 mt-2 mb-2 border-b border-dashed' />
        <span className='text-xl font-bold'>Más de 60 años de experiencia</span>
        <br />
        <span>
          <Button url='/radio/radio-5' text='Ver emisoras' className='mt-4' />
        </span>
      </p>
    </article>
  )
}

function Col2 (): React.JSX.Element {
  return (
    <div className='relative transition rounded-md pt-24 md:pt-0'>
      <div className='absolute z-50 top-4 md:top-0 right-0 bg-grayDark text-grayLight rounded-md p-4'>
        <span className='text-2xl font-bold'>5 de cada 10</span>
        <br />
        <span className='text-xl'>personas nos escuchan.</span>

        <img
          src='/images/radio/users-icon.png'
          alt=''
          className='radio-users-icon w-12 h-12 absolute bg-grayDark rounded-full border border-white top-0 left-0'
        />
      </div>
      <Zoom>
        <img src='/images/radio/cobertura-map.png' alt='' className='w-full rounded-md bg-grayLight rounded-md hover:bg-white transition' />
      </Zoom>
    </div>
  )
}
