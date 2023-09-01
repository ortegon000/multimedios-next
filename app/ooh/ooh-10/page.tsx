import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Component11 from '@/app/components/layouts/component11'

export const metadata: Metadata = {
  title: 'Multimedios - OOH 10',
  description: 'Presentación multimedios'
}

const images = [
  '/images/ooh/d10-1.png',
  '/images/ooh/d10-2.png'
]

export default function OOH10 (): React.JSX.Element {
  return (
    <ContentLayout section='ooh 10' background='1'>
      <Component11
        images={images} title='AUTOBUSES' subtitle='PUBLICIDAD MÓVIL' description='Contamos con más de 1000 rutas en la República Mexicana seleccionando las mejores unidades para impulsar las campañas de nuestros clientes.'
      />
    </ContentLayout>
  )
}
