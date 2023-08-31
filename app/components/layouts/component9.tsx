'use client'
import React from 'react'
import Atropos from 'atropos/react'
import Button from '../button'

import 'atropos/css'

export default function Component9 ({ number }:{number: number}): React.JSX.Element {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-center items-center gap-2 w-[80%] md:w-full mx-auto'>
        <Atropos className='md:hover:scale-110 transition-transform md:hover:translate-x-16'>
          <div className=''>
            <img src={`/images/tv/d${number}-1.png`} alt='' className='' />
          </div>
        </Atropos>
        <Atropos className='md:hover:scale-110 transition-transform '>
          <div>
            <img src={`/images/tv/d${number}-2.png`} alt='' />
          </div>
        </Atropos>
        <Atropos className='md:hover:scale-110 transition-transform md:hover:-translate-x-8'>
          <div>
            <img
              src={`/images/tv/d${number}-3.png`}
              alt=''
              className='bg-grayLight'
            />
          </div>
        </Atropos>
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
    </>
  )
}
