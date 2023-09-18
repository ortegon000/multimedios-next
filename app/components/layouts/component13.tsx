'use client'
import React from 'react'

import 'atropos/css'
import Button from '../button'
import NextImage from '../next-image'

export default function Component13 ({ images, logo, list = [] }:{images:any[], logo: string, list: any[]}): React.JSX.Element {
  return (
    <>
      <div className='my-2'>
        <NextImage src={logo} alt='' className='h-10 mx-auto' heightFull imageClassName='mx-auto' />
      </div>

      <div className='md:flex mt-4 items-center'>
        <ul className='mb-4 md:mb-0 md:w-1/2 max-w-xs mx-auto'>
          {
            list.map((item, key) => (
              <li className='mb-2' key={key}>
                <span className='h-3 w-3 inline-block rounded-full bg-grayDark mr-2' />
                {item}
              </li>
            ))
          }
        </ul>

        <span className='block w-xs md:w-0 md:h-56 mx-auto border-b md:border-l border-grayDark my-8' />

        <div className='grid grid-cols-2 gap-y-8 gap-x-4 md:w-1/2 mb-8'>
          {
            images.map((image, key) => (
              <div className='flex items-center' key={key}>
                <NextImage src={image.image} alt='' className='h-12 w-12 mr-2' />
                <div>
                  <p className='font-bold text-xl'>{image.title}</p>
                  <p className='text-sm'>{image.subtitle}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className='flex justify-center'>
        <Button url='/digital/digital-2' text='REGRESAR A MÉTRICAS Y KPI’S' dark back className='text-sm' />
      </div>
    </>
  )
}
