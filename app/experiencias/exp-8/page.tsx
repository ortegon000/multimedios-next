import ContentLayout from '../../content-layout'
import React from 'react'
import { Metadata } from 'next'
import Button from '@/app/components/button'
import CircleLeft from '@/app/components/circle-left'

export const metadata: Metadata = {
  title: 'Multimedios - Experiancias 8',
  description: 'Presentación multimedios'
}

export default function RadioD1 (): React.JSX.Element {
  return (
    <ContentLayout section='experiencias'>
      <>
        <CircleLeft image='/images/experiencias/d8.png' />
        <section className='max-w-2xl mx-auto px-2 mt-8'>

          <div className='bg-grayLight/70 backdrop-blur p-2 rounded-md'>
            <ul className='list-disc pl-8 text-lg [&>li]:mb-4 font-bold'>
              <li>La mayoría son detonados por Radio, pero con cobertura multimedia</li>
              <li>En otras ciudades también se están haciendo eventos y lidereados por Canal 6</li>
              <li>Dichos eventos, pueden ser patrocinados, ya sea con presencia dentro del evento + tiempo aire; solo tiempo aire; y se puede hasta negociar el namming del evento.</li>
              <li>Debido al liderazgo de las diferentes plataformas Multimedios, también se tiene eventos como conciertos</li>
            </ul>
            <p className='p-2 bg-grayDark text-grayLight rounded-md text-lg mb-4'>
              Eventos familiares, con grandes afluencias y en donde se tiene <strong>grupos musicales, talento del Multimedios, etc.</strong>
            </p>

            <div className='flex gap-2 flex-wrap'>
              <Button url='#' text='VER CALENDARIO' dark />
              <Button url='#' text='VER CONCIERTOS' dark />
              <Button url='#' text='VER VIDEO' />
            </div>
          </div>

        </section>

      </>
    </ContentLayout>
  )
}
