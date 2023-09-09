import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'

import CardBgBlur from '@/app/components/card-bg-blue'
import Component13 from '@/app/components/layouts/component13'

export const metadata: Metadata = {
  title: 'Multimedios - Digital 8',
  description: 'Presentación multimedios'
}

const logo = '/images/digital/d2-1.png'
const images = [
  {
    image: '/images/digital/d3-1.png',
    title: '50.9 M',
    subtitle: 'Usuarios'
  },
  {
    image: '/images/digital/d3-2.png',
    title: '4.8 M',
    subtitle: ''
  },
  {
    image: '/images/digital/d3-3.png',
    title: '295.6 K',
    subtitle: ''
  },
  {
    image: '/images/digital/d3-4.png',
    title: '5.6 M',
    subtitle: ''
  },
  {
    image: '/images/digital/d3-5.png',
    title: '596 K',
    subtitle: ''
  },
  {
    image: '/images/digital/d3-6.png',
    title: '5.18 M',
    subtitle: ''
  }
]

const list = [
  'Líderes en México dentro de la categoria de noticias',
  'Veracidad, inmediatez y credibilidad'
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
