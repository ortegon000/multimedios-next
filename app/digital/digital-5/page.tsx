import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'

import CardBgBlur from '@/app/components/card-bg-blue'
import Component13 from '@/app/components/layouts/component13'

export const metadata: Metadata = {
  title: 'Multimedios - Digital 5',
  description: 'Presentación multimedios'
}

const logo = '/images/digital/d2-3.png'
const images = [
  {
    image: '/images/digital/d5-1.png',
    title: '1 M',
    subtitle: 'Usuarios'
  },
  {
    image: '/images/digital/d5-2.png',
    title: '5.7 M',
    subtitle: ''
  },
  {
    image: '/images/digital/d5-3.png',
    title: '2.2 M',
    subtitle: ''
  },
  {
    image: '/images/digital/d5-4.png',
    title: '2 M',
    subtitle: ''
  },
  {
    image: '/images/digital/d5-5.png',
    title: '885 K',
    subtitle: ''
  },
  {
    image: '/images/digital/d5-6.png',
    title: '3.5 M',
    subtitle: ''
  }
]

const list = [
  'Sitio de entretenimiento con mas de 4 Millones de páginas vistas por mes.',
  'Dentro del Top10 en sitios de entretenimiento según Comscore.'
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
