import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Component11 from '@/app/components/layouts/component11'

export const metadata: Metadata = {
  title: 'Multimedios - OOH 4',
  description: 'Presentación multimedios'
}

const images = [
  '/images/ooh/d4-1.png',
  '/images/ooh/d4-2.png',
  '/images/ooh/d4-3.png'
]

export default function OOH4 (): React.JSX.Element {
  return (
    <ContentLayout section='ooh 4' background='1'>
      <Component11
        images={images} title='CARTELERAS' description='Tenemos espacios realmente impactantes en las principales
avenidas de la República Mexicana contando con más de
4,000 vistas a nivel nacional.'
      />
    </ContentLayout>
  )
}
