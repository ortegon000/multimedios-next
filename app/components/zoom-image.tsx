'use client'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Image from 'next/image'

export default function ZoomImage ({ image, className }:{image:string, className?: string}) {
  return (
    <Zoom>
      <Image
        src={image}
        alt=''
        width={0}
        height={0}
        sizes='100vw'
        className={`${className} w-full bg-grayLight rounded-md hover:bg-white transition`}
        style={
          {
            width: '100%',
            height: 'auto'
          }
        } // optional
      />
    </Zoom>
  )
}
