'use client'
import React from 'react'
import ZoomImage from '../zoom-image'

import Button from '../button'

export default function Component15 ({ images, logo, title, leftLogo = false, logoHeight = 'h-8' }:{images:any[], logo: string, title:string, leftLogo?:boolean, logoHeight?:string}): React.JSX.Element {
  return (
    <>
      <div className={leftLogo ? 'md:flex items-start' : ''}>
        <div className='flex items-end mb-4'>
          <img src={logo} alt='' className={logoHeight} />
          <h1 className='text-2xl font-bold ml-4'>{title}</h1>
        </div>

        <div className='md:flex md:gap-2 mb-4'>
          {
          images.map((image, key) => (
            <ZoomImage image={image} className='mb-4 md:mb-0' key={key} />
          ))
        }
        </div>
      </div>

      <div className='flex'>
        <Button url='/digital/digital-13' text='REGRESAR A MENÚ CASOS DE ÉXITO' back dark className='text-sm' />
      </div>
    </>
  )
}
