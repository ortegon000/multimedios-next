import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'

import CardBgBlur from '@/app/components/card-bg-blue'
import Component13 from '@/app/components/layouts/component13'

export const metadata: Metadata = {
  title: 'Multimedios - Digital 8',
  description: 'Presentación multimedios'
}

const logo = '/images/digital/d2-6.png'
const images = [
  {
    image: '/images/digital/d8-1.png',
    title: '20.4 M',
    subtitle: 'Usuarios'
  },
  {
    image: '/images/digital/d8-2.png',
    title: '3.4 M',
    subtitle: ''
  },
  {
    image: '/images/digital/d8-3.png',
    title: '5,500',
    subtitle: ''
  },
  {
    image: '/images/digital/d8-4.png',
    title: '2.4 M',
    subtitle: ''
  },
  {
    image: '/images/digital/d8-5.png',
    title: '610 K',
    subtitle: ''
  },
  {
    image: '/images/digital/d8-6.png',
    title: '273 K',
    subtitle: ''
  }
]

const list = [
  'Nativos digitales deportivos, líderes en la industria.',
  '23 años de experiencia.',
  'Generadores de contenidos'
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
