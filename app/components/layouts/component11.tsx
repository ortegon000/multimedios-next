'use client'
import React from 'react'
import Atropos from 'atropos/react'
import Button from '../button'

import 'atropos/css'
import NextImage from '../next-image'

export default function Component11 ({ images, title, subtitle = 'PUBLICIDAD EXTERIOR', description }:{images:any[], title: string, subtitle?: string, description:string}): React.JSX.Element {
  return (
    <section className='w-full px-2 max-w-4xl mx-auto mt-4'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <span className='p-1 border border-grayDark rounded-md text-sm'>{subtitle}</span>
      </div>
      <div className='mt-4 px-12 flex flex-col md:flex-row md:px-2 gap-2'>
        {
            images.map((item, key) => (
              <Atropos key={key} className='mx-auto'>
                <NextImage src={item} alt='' className='rounded-md overflow-hidden mx-auto w-full' />
              </Atropos>
            ))
          }
      </div>
      <div className='mt-4 p-2 bg-grayLight/70 rounded-md backdrop-blur max-w-md mx-auto text-center'>
        <p>
          {
            description
          }
        </p>
      </div>
      <div className='flex mt-4 justify-center'>
        <Button url='/ooh/ooh-3' text='REGRESAR A FORMATOS' dark back className='' />
      </div>
    </section>
  )
}
