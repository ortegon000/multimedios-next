import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Component11 from '@/app/components/layouts/component11'

export const metadata: Metadata = {
  title: 'Multimedios - OOH 11',
  description: 'Presentación multimedios'
}

const images = [
  '/images/ooh/d11-1.png',
  '/images/ooh/d11-2.png'
]

export default function OOH11 (): React.JSX.Element {
  return (
    <ContentLayout section='ooh 11' background='1'>
      <Component11
        images={images} title='VALLAS MÓVILES' subtitle='PUBLICIDAD MÓVIL' description='Medio dinámico que se adecua a las rutas, horarios y necesidades de cada campaña.'
      />
    </ContentLayout>
  )
}
