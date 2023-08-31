import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Button from '@/app/components/button'

export const metadata: Metadata = {
  title: 'Multimedios - OOH 1',
  description: 'Presentación multimedios'
}

function OOH (): React.JSX.Element {
  return (
    <ContentLayout section='ooh 1' background='1'>
      <section className='w-full flex mt-4 max-w-4xl mx-auto justify-center md:justify-end xl:justify-center px-'>
        <article className='relative z-10 w-full max-w-sm bg-grayLight/50 backdrop-blur'>
          <div className='flex gap-4 items-center'>
            <img src='/images/ooh/logo.png' alt='' className='h-12' />
            <span className='h-20 border border-grayDark' />
            <h1 className='w-full text-2xl font-bold'>
              SOMOS MÁS QUE
              ESPECTACULARES
            </h1>
          </div>
          <p className='mt-4'>
            POL es una empresa orgullosamente mexicana con la mayor
            cobertura en el sector publicitario de medios exteriores en
            Latinoamérica, con <strong>más de 35 años de experiencia</strong> forma parte
            de las unidades de negocio de uno de los grupos más influyentes
            de México, <strong>MULTIMEDIOS</strong>.
          </p>
          <div className='mt-4 grid grid-cols-3 gap-2 justify-around'>
            <div className=''>
              <img src='/images/ooh/d1-2.png' alt='' className='w-2/3 mx-auto' />
              <Button url='#' text='COBERTURA' dark className='mt-2 text-sm' />
            </div>
            <div className=''>
              <img src='/images/ooh/d1-3.png' alt='' className='w-2/3 mx-auto' />
              <Button url='#' text='FORMATOS' dark className='mt-2 text-sm' />
            </div>
            <div className=''>
              <img src='/images/ooh/d1-4.png' alt='' className='w-2/3 mx-auto' />
              <Button url='#' text='AAEE' dark className='mt-2 text-sm' />
            </div>
          </div>
        </article>

        <img src='/images/ooh/ooh-letrero.png' alt='' className='absolute  w-[48%] bottom-0 left-[2%] max-w-md' />
      </section>
    </ContentLayout>
  )
}

export default OOH
