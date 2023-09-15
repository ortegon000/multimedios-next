import ContentLayout from '../../content-layout'
import React from 'react'
import { Metadata } from 'next'
import Button from '@/app/components/button'

export const metadata: Metadata = {
  title: 'Multimedios - Experiancias 1',
  description: 'Presentación multimedios'
}

export default function RadioD1 (): React.JSX.Element {
  return (
    <ContentLayout section='experiencias'>
      <section className='max-w-4xl mx-auto px-2 mt-4'>
        <div className='grid gap-4 md:grid-cols-3'>
          <div className='border border-grayDark rounded-md bg-grayLight/50 backdrop-blur p-4'>

            <div className='h-20 flex items-center'>
              <img src='/images/experiencias/d1-1.png' alt='' className='mx-auto w-32 mb-4' />
            </div>

            <div className='h-auto md:h-52 flex items-center'>
              <p className='mb-4 text-center'>
                “Periodismo ‘desde’ y no sobre una marca” Contenido relevante con beneficio para el consumidor, en un entorno auténtico, al servicio de una marca.
              </p>
            </div>

            <div className='flex justify-center'>
              <Button url='#' text='VER MÁS' dark />
            </div>
          </div>

          <div className='border border-grayDark rounded-md bg-grayLight/50 backdrop-blur p-4'>

            <div className='h-20 flex items-center'>
              <img src='/images/experiencias/d1-2.png' alt='' className='mx-auto w-32 mb-4' />
            </div>

            <div className='h-auto md:h-52 flex items-center'>
              <p className='mb-4 text-center'>
                Un formato diferente y atractivo, ya que pone a los invitados a la altura de los speakers, un auténtico town hall que permite un diálogo y networking antes, durante y después de cada evento.

              </p>
            </div>
            <div className='flex justify-center'>
              <Button url='#' text='VER MÁS' dark />
            </div>
          </div>

          <div className='border border-grayDark rounded-md bg-grayLight/50 backdrop-blur p-4'>

            <div className='h-20 flex items-center'>
              <img src='/images/experiencias/d1-3.png' alt='' className='mx-auto w-32 mb-4' />
            </div>

            <div className='h-auto md:h-52 flex items-center'>
              <p className='mb-4 text-center'>
                Continuamente se llevan a cabo eventos en donde se generan experiencias para el público.
              </p>
            </div>

            <div className='flex justify-center'>
              <Button url='#' text='VER MÁS' dark />
            </div>
          </div>
        </div>
      </section>
    </ContentLayout>
  )
}
