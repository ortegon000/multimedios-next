import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Component12 from '@/app/components/layouts/component12'

export const metadata: Metadata = {
  title: 'Multimedios - Prensa 10',
  description: 'Presentación multimedios'
}

const images = [
  {
    image: '/images/prensa/d11-1.png',
    description: 'DOBLE PLANA TRIÁNGULO'
  },
  {
    image: '/images/prensa/d11-2.png',
    description: '3 CUADROS CONSECUTIVOS IMPAR+ PLANA '
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
