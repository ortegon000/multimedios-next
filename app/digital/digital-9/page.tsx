import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'

import CardBgBlur from '@/app/components/card-bg-blue'
import Component13 from '@/app/components/layouts/component13'

export const metadata: Metadata = {
  title: 'Multimedios - Digital 9',
  description: 'Presentación multimedios'
}

const logo = '/images/digital/d2-7.png'
const images = [
  {
    image: '/images/digital/d9-1.png',
    title: '4.1 M',
    subtitle: 'Usuarios'
  },
  {
    image: '/images/digital/d9-2.png',
    title: '253 K',
    subtitle: ''
  },
  {
    image: '/images/digital/d9-3.png',
    title: '27.6 K',
    subtitle: ''
  },
  {
    image: '/images/digital/d9-4.png',
    title: '2.5 M',
    subtitle: ''
  },
  {
    image: '/images/digital/d9-5.png',
    title: '1.7 K',
    subtitle: ''
  },
  {
    image: '/images/digital/d9-6.png',
    title: '4 M',
    subtitle: 'Páginas vistas'
  }
]

const list = [
  'Líderes en entretenimiento.',
  'Celebridades, moda, horóscopos.'
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
