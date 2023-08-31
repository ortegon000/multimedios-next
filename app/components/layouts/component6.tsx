import React from 'react'

interface Props {
  children: React.JSX.Element;
  title: string;
  logo: string;
  audio: string;
}

export default function Component6 ({
  children,
  logo,
  title,
  audio
}: Props): React.JSX.Element {
  return (
    <section className='mt-4 radio mx-auto max-w-4xl flex justify-end items-center px-4 md:px-0'>
      <div className='md:w-7/12 w-full flex gap-4'>
        <div className='w-20 md:flex hidden'>
          <span className='flex justify-center items-center border border-grayDark bg-grayLight rounded-full w-20 h-20'>
            <img src={logo} alt='' className='h-16 w-16 object-contain' />
          </span>
        </div>

        <div className='w-full'>
          <h1 className='text-2xl font-bold flex justify-between items-center mb-2'>
            {title}
            <span className='flex justify-center items-center border border-grayDark bg-grayLight rounded-full w-14 h-14'>
              <img src={logo} alt='' className='h-12 w-12 object-contain' />
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
