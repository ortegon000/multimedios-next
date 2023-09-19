'use client'
import React, { useState } from 'react'
import Atropos from 'atropos/react'

import 'atropos/css'
import Button from '../button'
import NextImage from '../next-image'
import VideoPlayer from '../video-player'

export default function Component14 ({ image, logo, social, socialText, data, bottomText, video = '/videos/intro.webm' }:{image:string, logo: string, social:string, socialText:string, data:any[], bottomText: string, video?:string}): React.JSX.Element {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <div className='flex relative'>
      <div className='w-1/2 md:w-1/3'>
        <Atropos>
          <NextImage src={image} alt='' className='rounded w-full' />
        </Atropos>

        <Button url='/digital/digital-13' text='REGRESAR A MENÚ CASOS DE ÉXITO' dark back className='text-xs mt-4' />
      </div>

      <div className='w-1/2 md:w-2/3 px-2 md:px-8'>
        <div className='flex justify-start flex-wrap items-center gap-2 mb-4'>
          <NextImage src={logo} alt='' className='w-16' />
          {
            social && <NextImage src={social} alt='' className='w-12' />
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
          <button type='button' className='bg-grayDark text-grayLight px-4 py-1 rounded-md hover:bg-grayDark-900' onClick={() => setVideoOpen(true)}>Ver video</button>
        </div>
      </div>

      {/* video modal */}
      {
        videoOpen && (
          <div className='bg-grayLight absolute w-full h-full inset-0 m-auto rounded-md flex items-center z-10'>
            <VideoPlayer video={video} />
            <button type='button' className='bg-red-500 absolute top-2 right-2 text-white px-4 py-1 rounded-md' onClick={() => setVideoOpen(false)}>Cerrar</button>
          </div>
        )
      }
    </div>
  )
}
