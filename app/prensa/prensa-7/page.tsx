'use client'
import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Atropos from 'atropos/react'
import 'atropos/atropos.css'

export const metadata: Metadata = {
  title: 'Multimedios - Prensa 7',
  description: 'Presentación multimedios'
}

const images = [
  {
    image: '/images/prensa/d8-1.png',
    description: 'CINTILLO VERTICAL EN PORTADA + CONTRAPORTADA'
  },
  {
    image: '/images/prensa/d8-2.png',
    description: 'ESPACIO CERATIVO 1 X 8 MÓDULOS EN 3 PÁGINAS CONSECUTIVAS IMPARES'
  }
]

function Prensa (): React.JSX.Element {
  return (
    <ContentLayout section='prensa'>
      <section className='max-w-4xl mx-auto px-2 mt-4'>
        <h1 className='text-2xl font-bold text-center mb-4'>ESPACIOS CREATIVOS</h1>
        <h2 className='text-xl text-center mb-4'>MILENIO DIARIO</h2>

        <div className='flex flex-col md:flex-row gap-4'>
          {
            images.map((image, key) => (
              <div key={key}>
                <Atropos>
                  <img src={image.image} alt='' className='w-[80%] md:w-full mx-auto' />
                </Atropos>
                <p className='text-center mt-2 max-w-[80%] mx-auto'>{image.description}</p>
              </div>

            ))
          }
        </div>
      </section>
    </ContentLayout>
  )
}

export default Prensa
