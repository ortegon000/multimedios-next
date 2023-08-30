'use client'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function ZoomImage ({ image }:{image:string}) {
  return (
    <Zoom>
      <img src={image} alt='' className='w-full rounded-md bg-grayLight rounded-md hover:bg-white transition' />
    </Zoom>
  )
}
