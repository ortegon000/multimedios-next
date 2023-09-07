import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Component12 from '@/app/components/layouts/component12'

export const metadata: Metadata = {
  title: 'Multimedios - Prensa 9',
  description: 'Presentación multimedios'
}

const images = [
  {
    image: '/images/prensa/d10-1.png',
    description: 'PLANA ROMPIENDO AL CENTRO'
  },
  {
    image: '/images/prensa/d10-2.png',
    description: 'DOBLE PLANA PUSH'
  },
  {
    image: '/images/prensa/d10-3.png',
    description: 'ESPACIO 6 X 8'
  }
]

function Prensa (): React.JSX.Element {
  return (
    <ContentLayout section='prensa'>
      <Component12 images={images} title='ESPACIOS CREATIVOS' />
    </ContentLayout>
  )
}

export default Prensa
