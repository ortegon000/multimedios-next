import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Button from '@/app/components/button'
import ZoomImage from '@/app/components/zoom-image'

export const metadata: Metadata = {
  title: 'Multimedios - OOH 2',
  description: 'Presentación multimedios'
}

function OOH2 (): React.JSX.Element {
  return (
    <ContentLayout section='ooh 1' background='1'>
      <section className='w-full px-2 max-w-4xl mx-auto md:flex md:flex-row-reverse md:gap-4 mt-4'>
        <article className='relative z-10 w-full max-w-sm bg-grayLight/50 backdrop-blur'>
          <div className=''>
            <p>
              <span className='text-2xl'>PRESENTES EN</span>
            </p>
            <p className='my-2'>
              <span className='bg-grayDark text-grayLight font-bold text-2xl rounded-md p-2'>MÁS DE 380</span>
            </p>
            <p>
              <span className='text-2xl font-bold'>POBLACIONES</span>
            </p>
            <p>
              con más de 4,000 áreas de exhibición
              en la República Mexicana y más de 800
              en Centroamérica
            </p>
            <p className='mt-2'>
              <span className='text-2xl'>14 OFICINAS EN</span>
            </p>
            <p className='my-2'>
              <span className='border border-grayDark rounded-md text-2xl p-2 font-bold'>MÉXICO</span>
            </p>
            <p>
              <span>6 EN CENTROAMÉRICA</span>
            </p>
          </div>
        </article>

        <div className='mt-4 md:mt-0'>
          <ZoomImage image='/images/ooh/d2.png' />
        </div>
      </section>
    </ContentLayout>
  )
}

export default OOH2
