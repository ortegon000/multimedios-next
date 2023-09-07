import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Component12 from '@/app/components/layouts/component12'

export const metadata: Metadata = {
  title: 'Multimedios - Prensa 11',
  description: 'Presentación multimedios'
}

const images = [
  {
    image: '/images/prensa/d12-1.png',
    description: 'CINTILLOS VERTICALES ENFRENTADOS'
  },
  {
    image: '/images/prensa/d12-2.png',
    description: 'SAMPLING PRODUCTO'
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
