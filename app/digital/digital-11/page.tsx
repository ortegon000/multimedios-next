import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'

import CardBgBlur from '@/app/components/card-bg-blue'
import Component13 from '@/app/components/layouts/component13'

export const metadata: Metadata = {
  title: 'Multimedios - Digital 11',
  description: 'Presentación multimedios'
}

const logo = '/images/digital/d2-9.png'
const images = [
  {
    image: '/images/digital/d11-1.png',
    title: '1.5 M',
    subtitle: 'Usuarios'
  },
  {
    image: '/images/digital/d11-2.png',
    title: '1.3 M',
    subtitle: ''
  },
  {
    image: '/images/digital/d11-3.png',
    title: '37.8 K',
    subtitle: ''
  },
  {
    image: '/images/digital/d11-4.png',
    title: '48.3 K',
    subtitle: ''
  },
  {
    image: '/images/digital/d11-5.png',
    title: '180 K',
    subtitle: ''
  }
]

const list = [
  'La mejor opción digital del país con la información veraz en noticias y entretenimiento.',
  'Más de 3 M páginas vistas por mes.'
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
