import ContentLayout from '../../content-layout'
import Component3 from '../../components/layouts/component3'
import React from 'react'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multimedios - Radio 4',
  description: 'Presentación multimedios'
}

const cards = [
  {
    icon: '/images/radio/fmtu.png',
    title: 'Cadena FMTU',
    subtitle: '2 emisoras',
    columns: '',
    list: ['Monterrey', 'Torreón']
  },
  {
    icon: '/images/radio/classic.png',
    title: 'Cadena Classic',
    subtitle: '2 emisoras',
    columns: '',
    list: ['Monterrey', 'Tampico']
  },
  {
    icon: '/images/radio/d99.png',
    title: 'Cadena D99',
    subtitle: '2 emisoras',
    columns: '',
    list: ['Monterrey', 'Chihuahua']
  }
]

export default function RadioD4 (): React.JSX.Element {
  return (
    <ContentLayout section='radio 4'>
      <Component3
        cards={cards}
        title='CADENA'
        textButton='Ver Emisoras'
        urlButton='/radio/radio-5'
        subsection='radio-4'
      />
    </ContentLayout>
  )
}
