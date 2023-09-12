'use client'
import React from 'react'
import Atropos from 'atropos/react'

import 'atropos/css'
import Button from '../button'

export default function Component14 ({ image, logo, social, socialText, data, bottomText }:{image:string, logo: string, social:string, socialText:string, data:any[], bottomText: string}): React.JSX.Element {
  return (
    <div className='flex'>
      <div className='w-1/2 md:w-1/3'>
        <Atropos>
          <img src={image} alt='' className='rounded' />
        </Atropos>

        <Button url='/digital/digital-13' text='REGRESAR A MENÚ CASOS DE ÉXITO' dark back className='text-xs mt-4' />
      </div>

      <div className='w-1/2 md:w-2/3 px-2 md:px-8'>
        <div className='flex justify-start flex-wrap items-center gap-2 mb-4'>
          <img src={logo} alt='' className='w-16' />
          {
            social && <img src={social} alt='' className='w-12' />
          }
          <p className='text-2xl font-bold'>{socialText}</p>
        </div>

        <div className='grid md:grid-cols-2 mb-2'>
          {
            data.map((item, key) => (
              <div key={key} className='mb-2'>
                <p className='text-2xl font-bold'>{item.value}</p>
                <p>{item.text}</p>
              </div>
            ))
          }
        </div>

        <p className='text-sm mb-4'>{bottomText}</p>

        <div className='flex'>
          <Button url='#' text='Ver Video' dark />
        </div>
      </div>
    </div>
  )
}
