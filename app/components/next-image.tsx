import Image from 'next/image'
import React from 'react'

export default function NextImage ({ src, alt = '', className = '' } : {src:string, alt?:string, className?:string}) : React.JSX.Element {
  return (
    <div className={`${className} relative`}>
      <Image src={src} alt={alt} fill className='object-cover' />
    </div>
  )
}
