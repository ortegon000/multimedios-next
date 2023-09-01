import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Component11 from '@/app/components/layouts/component11'

export const metadata: Metadata = {
  title: 'Multimedios - OOH 5',
  description: 'Presentación multimedios'
}

const images = [
  '/images/ooh/d5-1.png',
  '/images/ooh/d5-2.png',
  '/images/ooh/d5-3.png'
]

export default function OOH5 (): React.JSX.Element {
  return (
    <ContentLayout section='ooh 5' background='1'>
      <Component11
        images={images} title='MUROS' description='Contamos con muros de gran impacto, ubicados de manera
        estratégica en zonas urbanas de gran afluencia.'
      />
    </ContentLayout>
  )
}
