import Image from 'next/image'
import React from 'react'

export default function NextImage ({ src, alt = '', className = '', heightFull = false, imageClassName = '' } : {src:string, alt?:string, className?:string, heightFull?:boolean, imageClassName?: string}) : React.JSX.Element {
  return (
    <div className={`${className} relative`}>
      <Image
        src={src}
        alt={alt}
        // fill
        // className='object-cover'
        width={0}
        height={0}
        sizes='100vw'
        className={imageClassName}
        style={
          {
            width: heightFull ? 'auto' : '100%',
            height: heightFull ? '100%' : 'auto'
          }
        } // optional
      />
    </div>
  )
}
