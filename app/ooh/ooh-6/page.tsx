import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Component11 from '@/app/components/layouts/component11'

export const metadata: Metadata = {
  title: 'Multimedios - OOH 6',
  description: 'Presentación multimedios'
}

const images = [
  '/images/ooh/d6-1.png',
  '/images/ooh/d6-2.png',
  '/images/ooh/d6-3.png'
]

export default function OOH6 (): React.JSX.Element {
  return (
    <ContentLayout section='ooh 6' background='1'>
      <Component11
        images={images} title='PUENTES' description='Ofrecemos los mejores puentes peatonales distribuidos en avenidas principales de la República con excelente
vista vehicular y peatonal, en donde los mensajes publicitarios serán percibidos de una manera dinámica.'
      />
    </ContentLayout>
  )
}
