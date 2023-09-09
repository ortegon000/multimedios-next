import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'

import CardBgBlur from '@/app/components/card-bg-blue'
import Component13 from '@/app/components/layouts/component13'

export const metadata: Metadata = {
  title: 'Multimedios - Digital 4',
  description: 'Presentación multimedios'
}

const logo = '/images/digital/d2-2.png'
const images = [
  {
    image: '/images/digital/d4-1.png',
    title: '50.9 M',
    subtitle: 'Usuarios'
  },
  {
    image: '/images/digital/d4-2.png',
    title: '141 K',
    subtitle: ''
  },
  {
    image: '/images/digital/d4-3.png',
    title: '8 K',
    subtitle: ''
  }
]

const list = [
  '62 emisoras online disponibles los 365 días del año.',
  'Tenemos un total de 3.1 millonesde horas escuchadas cada mes.',
  '#1 en campañas digitales dentrodel sitio y redes sociales'
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
