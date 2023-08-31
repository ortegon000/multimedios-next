import React from 'react'
import Button from '../button'

export default function Component5 ({
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
    <section className='radio mx-auto max-w-4xl flex justify-center items-center'>
      <div className='w-full md:w-7/12 flex gap-2 px-2'>
        <div className='w-24 md:flex hidden'>
          <span className='flex h-20 w-20 justify-center items-center border border-grayDark rounded-full'>
            <img src={logo} alt='' className='h-14 w-14 object-contain' />
          </span>
        </div>

        <div className='w-full'>
          <h1 className='my-4 text-3xl font-bold flex items-center justify-between'>
            {title}
            <span className='flex justify-center items-center p-2 border border-grayDark rounded-full bg-grayLight md:hidden'>
              <img src={logo} alt='' className='h-12 w-12 object-contain' />
            </span>
          </h1>

          <div className='bg-grayDark rounded-md text-grayLight p-4'>
            <div>{children}</div>

            <div className='flex mt-4 justify-end'>
              <audio controls src={audio} />
            </div>
          </div>

          <div className='mt-4 flex justify-end'>
            <Button
              url='/radio/radio-5'
              text='REGRESAR A EMISORAS'
              dark
              back
              className='text-sm'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
