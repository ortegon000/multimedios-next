import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'

import CardBgBlur from '@/app/components/card-bg-blue'
import Component13 from '@/app/components/layouts/component13'

export const metadata: Metadata = {
  title: 'Multimedios - Digital 10',
  description: 'Presentación multimedios'
}

const logo = '/images/digital/d2-8.png'
const images = [
  {
    image: '/images/digital/d3-1.png',
    title: '2.4 M',
    subtitle: 'Usuarios'
  },
  {
    image: '/images/digital/d3-2.png',
    title: '2.3 M',
    subtitle: 'Páginas vistas'
  }
]

const list = [
  'Sitio líder en contenido de Béisbol.',
  'Cobertura de las mejores ligas del mundo'
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
