import React from 'react'
import NextImage from '../next-image'

export default function Component6 ({
  children,
  logo,
  title,
  audio
}: {
  children: React.JSX.Element;
  title: string;
  logo: string;
  audio: string;
}): React.JSX.Element {
  return (
    <section className='mt-4 radio mx-auto max-w-4xl flex justify-end items-center px-4 md:px-0'>
      <div className='md:w-7/12 w-full flex gap-4 bg-grayLight/50 backdrop-blur rounded-md p-2'>
        <div className='w-20 md:flex hidden'>
          <span className='flex justify-center items-center border border-grayDark bg-grayLight rounded-full w-20 h-20'>
            <NextImage src={logo} alt='' className='h-16 w-16 flex items-center' />
          </span>
        </div>

        <div className='w-full'>
          <h1 className='text-2xl font-bold flex justify-between items-center mb-2'>
            {title}
            <span className='md:hidden flex justify-center items-center border border-grayDark bg-grayLight rounded-full w-14 h-14'>
              <NextImage src={logo} alt='' className='h-12 w-12 flex items-center' />
            </span>
          </h1>
          <div className='bg-grayDark rounded-md text-grayLight p-2'>
            <div className='text-sm'>{children}</div>

            <div className='flex mt-2 justify-end'>
              <audio controls src={audio} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
