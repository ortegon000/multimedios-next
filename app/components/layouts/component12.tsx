'use client'
import React from 'react'
import Atropos from 'atropos/react'

import 'atropos/css'
import NextImage from '../next-image'

export default function Component12 ({ images, title, subtitle = 'MILENIO DIARIO' }:{images:any[], title: string, subtitle?: string}): React.JSX.Element {
  return (
    <section className='max-w-4xl mx-auto px-2 mt-4'>
      <h1 className='text-2xl font-bold text-center mb-2'>{title}</h1>
      <h2 className='text-xl text-center mb-4'>{subtitle}</h2>

      <div className='flex flex-col md:flex-row gap-4 items-center bg-grayLight/50 backdrop-blur p-2'>
        {
            images.map((image, key) => (
              <div key={key}>
                <Atropos>
                  <NextImage src={image.image} alt='' className='w-[80%] md:w-full mx-auto' />
                  <p className='text-center mt-2 max-w-[80%] mx-auto bg-grayLight rounded-md' data-atropos-offset='5'>{image.description}</p>
                </Atropos>
              </div>

            ))
          }
      </div>
    </section>
  )
}
