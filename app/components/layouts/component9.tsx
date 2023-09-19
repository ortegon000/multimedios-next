'use client'
import React from 'react'
import Atropos from 'atropos/react'
import Button from '../button'

import 'atropos/css'
import NextImage from '../next-image'

export default function Component9 ({ number }:{number: number}): React.JSX.Element {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-center items-center gap-2 w-[80%] md:w-full mx-auto'>

        <div className='w-full md:w-[52%]'>
          <Atropos className='md:hover:scale-110 transition-transform md:hover:translate-x-16'>
            <NextImage src={`/images/tv/d${number}-1.png`} alt='' className='w-full' />
          </Atropos>
        </div>

        <div className='w-full md:w-[22%]'>
          <Atropos className='md:hover:scale-110 transition-transform '>
            <NextImage src={`/images/tv/d${number}-2.png`} alt='' className='w-full' />
          </Atropos>
        </div>

        <div className='w-full  md:w-[22%]'>
          <Atropos className='md:hover:scale-110 transition-transform md:hover:-translate-x-8'>
            <NextImage
              src={`/images/tv/d${number}-3.png`}
              alt=''
              className='bg-grayLight w-full rounded-md'
            />
          </Atropos>
        </div>

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
