import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Component12 from '@/app/components/layouts/component12'

export const metadata: Metadata = {
  title: 'Multimedios - Prensa 8',
  description: 'Presentación multimedios'
}

const images = [
  {
    image: '/images/prensa/d9-1.png',
    description: 'FAJILLA CON SUAJE QUE ENVUELVE AL PERIÓDICO'
  },
  {
    image: '/images/prensa/d9-2.png',
    description: 'DOBLE PLANA BREAK'
  },
  {
    image: '/images/prensa/d9-3.png',
    description: 'FAJILLA QUE ENVUELVE AL PERIÓDICO'
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
