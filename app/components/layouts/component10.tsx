import React from 'react'
import Button from '../button'
import ZoomImage from '../zoom-image'

export default function Component10 ({ image }:{image:string}): React.JSX.Element {
  return (
    <section className='mt-10 max-w-4xl mx-auto px-2'>
      <div className='flex justify-center hover:cursor-zoom-in'>
        <ZoomImage image={image} />
      </div>

      <div className='mt-4 flex justify-end'>
        <Button
          url='/tv/tv-3'
          text='REGRESAR A PROGRAMACIÓN'
          dark
          back
          className='text-sm'
        />
      </div>
    </section>
  )
}
