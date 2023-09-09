import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'

import CardBgBlur from '@/app/components/card-bg-blue'
import Component13 from '@/app/components/layouts/component13'

export const metadata: Metadata = {
  title: 'Multimedios - Digital 6',
  description: 'Presentación multimedios'
}

const logo = '/images/digital/d2-4.png'
const images = [
  {
    image: '/images/digital/d6-1.png',
    title: '1.4 M',
    subtitle: 'Usuarios'
  },
  {
    image: '/images/digital/d6-2.png',
    title: '126 K',
    subtitle: ''
  },
  {
    image: '/images/digital/d6-3.png',
    title: '24.1 K',
    subtitle: ''
  },
  {
    image: '/images/digital/d6-4.png',
    title: '2.4 K',
    subtitle: ''
  },
  {
    image: '/images/digital/d6-5.png',
    title: '89.6 K',
    subtitle: ''
  }
]

const list = [
  'Referente en sitios de sociales. Estilo de vida, moda, lujo, gastronomía, entre otros.',
  'Ediciones especiales de diseño, arquitectura y nupcias'
]

function Digital (): React.JSX.Element {
  return (
    <ContentLayout section='digital'>
      <CardBgBlur>
        <Component13 images={images} logo={logo} list={list} />
      </CardBgBlur>
    </ContentLayout>
  )
}

export default Digital
