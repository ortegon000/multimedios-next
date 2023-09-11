import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Button from '@/app/components/button'

export const metadata: Metadata = {
  title: 'Multimedios - Digital 1',
  description: 'Presentación multimedios'
}

function Digital (): React.JSX.Element {
  return (
    <ContentLayout section='digital'>
      <section className='max-w-4xl mx-auto px-2 mt-4'>

        <div className='md:flex mb-4'>
          <div className='md:w-2/3 mb-4 md:mb-0'>
            <p className='md:text-xl text-center md:text-left mb-2'>
              Como Grupo nos posicionamos en el <span className='text-2xl md:text-4xl font-bold'>#1</span><br /> de propiedades digitales en México
            </p>
            <p className='bg-grayDark text-grayLight p-2 rounded-md text-center mb-4 max-w-md mx-auto md:ml-0'>
              Entre Google, Facebook, Microsoft y Mercado Libre
            </p>

            <div className='grid grid-cols-3 bg-grayLight/50 backdrop-blur rounded-md p-2 text-sm gap-4'>

              <div className='mb-4 md:flex'>
                <img src='/images/digital/d1-1.png' alt='' className='h-12 mx-auto md:ml-0 md:mr-2' />
                <p className='text-center md:text-left'>
                  <strong>50,735,054</strong><br />
                  <span>Usuarios Únicos A total sitios</span>
                </p>
              </div>

              <div className='mb-4 md:flex'>
                <img src='/images/digital/d1-2.png' alt='' className='h-12 mx-auto md:ml-0 md:mr-2' />
                <p className='text-center md:text-left'>
                  <strong>20.8 M</strong><br />
                  <span>Fans Totales en Redes Sociales Institucionales</span>
                </p>
              </div>

              <div className='mb-4 md:flex'>
                <img src='/images/digital/d1-3.png' alt='' className='h-12 mx-auto md:ml-0 md:mr-2' />
                <p className='text-center md:text-left'>
                  <strong>9.5 M</strong><br />
                  <span>Suscriptores a total canales Institucionales</span>
                </p>
              </div>

              <div className='mb-4 md:flex'>
                <img src='/images/digital/d1-4.png' alt='' className='h-12 mx-auto md:ml-0 md:mr-2' />
                <p className='text-center md:text-left'>
                  <strong>128,040,221</strong><br />
                  <span>Páginas vistas</span>
                </p>
              </div>

              <div className='mb-4 md:flex'>
                <img src='/images/digital/d1-5.png' alt='' className='h-12 mx-auto md:ml-0 md:mr-2' />
                <p className='text-center md:text-left'>
                  <strong>13.8 M</strong><br />
                  <span>Cuentas Total perfiles Institucionales</span>
                </p>
              </div>

              <div className='mb-4 md:flex'>
                <img src='/images/digital/d1-6.png' alt='' className='h-12 mx-auto md:ml-0 md:mr-2' />
                <p className='text-center md:text-left'>
                  <strong>2.5 M</strong><br />
                  <span>Followers Total perfiles Institucionales</span>
                </p>
              </div>

            </div>
          </div>

          <div className='md:w-1/3'>
            <img src='/images/digital/d1-8.png' alt='' className='h-8 mt-2 mx-auto md:ml-0' />
            <div className='relative md:pb-24 mb-4 md:mb-0'>
              <p className='md:absolute text-center md:text-left text-xl -left-16'>El sitio de noticias <strong className='text-2xl'>#1 en México</strong></p>
            </div>
            <img src='/images/digital/d1-7.png' alt='' />
          </div>
        </div>

        <div className='flex flex-wrap gap-4 justify-center'>
          <Button url='/digital/digital-2' text="MÉTRICAS U KPI'S" dark />
          <Button url='/digital/digital-12' text='SOLUCIONES DIGITALES' dark />
          <Button url='/digital/digital-13' text='CASOS DE ÉXITO' dark />
        </div>
      </section>
    </ContentLayout>
  )
}

export default Digital
