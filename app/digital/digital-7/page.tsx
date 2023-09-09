import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'

import CardBgBlur from '@/app/components/card-bg-blue'
import Component13 from '@/app/components/layouts/component13'

export const metadata: Metadata = {
  title: 'Multimedios - Digital 7',
  description: 'Presentación multimedios'
}

const logo = '/images/digital/d2-5.png'
const images = [
  {
    image: '/images/digital/d7-1.png',
    title: '9.1 M',
    subtitle: 'Usuarios'
  },
  {
    image: '/images/digital/d7-2.png',
    title: '2.7 M',
    subtitle: ''
  },
  {
    image: '/images/digital/d7-3.png',
    title: '779.9 K',
    subtitle: ''
  },
  {
    image: '/images/digital/d7-4.png',
    title: '1.3 M',
    subtitle: ''
  },
  {
    image: '/images/digital/d7-5.png',
    title: '208 K',
    subtitle: ''
  },
  {
    image: '/images/digital/d7-6.png',
    title: '721 K',
    subtitle: ''
  }
]

const list = [
  '7 ediciones diferentes dentro del sitio.',
  'Credibilidad y veracidad en la información.',
  'Actualización 24/7 los 365 días del año'
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
