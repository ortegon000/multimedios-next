import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Component12 from '@/app/components/layouts/component12'

export const metadata: Metadata = {
  title: 'Multimedios - Prensa 7',
  description: 'Presentación multimedios'
}

const images = [
  {
    image: '/images/prensa/d8-1.png',
    description: 'CINTILLO VERTICAL EN PORTADA + CONTRAPORTADA'
  },
  {
    image: '/images/prensa/d8-2.png',
    description: 'ESPACIO CERATIVO 1 X 8 MÓDULOS EN 3 PÁGINAS CONSECUTIVAS IMPARES'
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
