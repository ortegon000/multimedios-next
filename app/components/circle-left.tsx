import React from 'react'

export default function CircleLeft ({ image, className }: {
  image: string;
  className?: string;
}): React.JSX.Element {
  return (
    <div className={`${className} absolute -z-10 bottom-0 left-0 overflow-hidden`}>
      <div className='left-circle-dot-1 flex justify-center items-start'>
        <span className='transform -translate-y-1.5 block w-3 h-3 rounded-full bg-grayDark' />
      </div>
      <div className='left-circle-dot-2 flex justify-center items-start'>
        <span className='transform -translate-y-1.5 block w-3 h-3 rounded-full bg-grayDark' />
      </div>
      <div className='left-circle-dot-2-1 flex justify-center items-start'>
        <span className='transform -translate-y-1.5 block w-3 h-3 rounded-full bg-grayDark' />
      </div>
      <div className='left-circle-dot-3 flex justify-center items-start'>
        <span className='transform -translate-y-1.5 block w-3 h-3 rounded-full bg-grayDark' />
      </div>

      <img src={image} alt='' className='w-[450px]' />
    </div>
  )
}
