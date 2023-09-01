import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Component11 from '@/app/components/layouts/component11'

export const metadata: Metadata = {
  title: 'Multimedios - OOH 9',
  description: 'Presentación multimedios'
}

const images = [
  '/images/ooh/d9-1.png',
  '/images/ooh/d9-2.png',
  '/images/ooh/d9-3.png'
]

export default function OOH9 (): React.JSX.Element {
  return (
    <ContentLayout section='ooh 9' background='1'>
      <Component11
        images={images} title='PANTALLAS LED' subtitle='PUIBLICIDAD DIGITAL' description='Medio vanguardista que impacta por su dinamísmo para comunicar mensajes efectivos con la más avanzada tecnología.'
      />
    </ContentLayout>
  )
}
