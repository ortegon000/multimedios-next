'use client'

import React, { useEffect, useState } from 'react'

export default function TopMenuLine ({
  dotPosition,
  direction
}: {
  dotPosition: string;
  direction: string;
}): React.JSX.Element {
  const [position, setPosition] = useState(direction)

  useEffect(() => {
    setTimeout(() => {
      setPosition(dotPosition)
    }, 100)
  })

  return (
    <div className='mt-2 text-center'>
      <span className='border border-grayDark w-[90%] max-w-sm inline-block relative'>
        <span
          className={`${position} transition-all duration-300 w-3 h-3 inline-block bg-grayDark rounded-full absolute top-1/2 transform -translate-y-1/2`}
          id='top-menu-dot'
        />
      </span>
    </div>
  )
}
