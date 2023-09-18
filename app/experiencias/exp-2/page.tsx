import ContentLayout from '../../content-layout'
import React from 'react'
import { Metadata } from 'next'
import CircleLeft from '@/app/components/circle-left'
import NextImage from '@/app/components/next-image'

export const metadata: Metadata = {
  title: 'Multimedios - Experiancias 2',
  description: 'Presentación multimedios'
}

export default function RadioD1 (): React.JSX.Element {
  return (
    <ContentLayout section='experiencias'>
      <>
        <CircleLeft image='/images/experiencias/d2-1.png' />
        <section className='max-w-2xl mx-auto px-2 mt-4'>
          <div className='bg-grayLight/70 backdrop-blur p-2 rounded-md'>
            <NextImage src='/images/experiencias/d2-2.png' alt='' className='w-32 mx-auto' />
            <p className='text-lg font-bold mt-4'>
              Es una estrategia de producción de contenidos a través de la cual se crea y distribuye información relevante y valiosa de los clientes, para atraer, adquirir y generar engagement con el público objetivo.
            </p>
            <h2 className='text-ls font-bold pl-6 mt-4'>Beneficios:</h2>
            <ul className='list-disc pl-8'>
              <li>Amplía posibilidades creativas y de comunicación de la marca.</li>
              <li>Informa y forma a los consumidores.</li>
              <li>Crea fidelidad y lealtad hacia la marca.</li>
              <li>Consigue mayor atención e implicación de la audiencia.</li>
              <li>Incrementa recordación de marca.</li>
              <li>Amplía la difusión en medios ganados.</li>
              <li>Capta usuarios potenciales.</li>
              <li>Es una gran plataforma de exposición desde print, tv, radio, web y libros.</li>
            </ul>
          </div>
        </section>

      </>
    </ContentLayout>
  )
}
