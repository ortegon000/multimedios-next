'use client'
import React, { useState } from 'react'
import Atropos from 'atropos/react'

import 'atropos/css'
import NextImage from '../next-image'

export default function Component7 ({ logo, images }: {
  logo: string;
  images: any[];
}): React.JSX.Element {
  const [translate, setTranslate] = useState('')

  const handleMouseEnter = (key: number): void => {
    if (key === 1) {
      setTranslate('')
    }

    if (key === 0) {
      setTranslate('md:hover:translate-x-16')
    }

    if (key === 2) {
      setTranslate('md:hover:-translate-x-16')
    }
  }

  return (
    <>
      <div className='flex items-center gap-4 justify-center mt-4'>
        <span className='flex justify-center items-center w-20 h-20 rounded-full border border-grayDark'>
          <NextImage src={logo} alt='' className='w-14 object-cover' />
        </span>
        <h1 className='text-3xl font-bold'>CABINA</h1>
      </div>

      <div className='flex flex-col md:flex-row max-w-4xl mt-4 mx-auto justify-center items-center gap-4 px-4 md:px-0'>
        {images.map((item, key) => (
          <div
            className={`${translate} md:hover:scale-150 transition-all hover:z-50 w-3/4`}
            key={key}
            onMouseEnter={() => {
              handleMouseEnter(key)
            }}
          >
            <Atropos>
              <NextImage
                src={item.image}
                alt=''
                className='object-contain h-full w-full'
              />
            </Atropos>
          </div>
        ))}
      </div>
    </>
  )
}
