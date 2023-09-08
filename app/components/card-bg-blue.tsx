import React from 'react'

export default function CardBgBlur ({ children }:{children:React.JSX.Element}): React.JSX.Element {
  return (
    <section className='max-w-4xl mx-auto mt-4 px-2'>
      <section className='flex relative'>
        <div className='bg-blur blur-md absolute w-[120%] h-[120%] -translate-x-[10%] -z-10 inset-0 m-auto' />

        <div className='w-full bg-grayLight rounded-md p-2'>
          {children}
        </div>
      </section>
    </section>
  )
}
