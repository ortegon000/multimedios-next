import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Component11 from '@/app/components/layouts/component11'

export const metadata: Metadata = {
  title: 'Multimedios - OOH 7',
  description: 'Presentación multimedios'
}

const images = [
  '/images/ooh/d7.png'
]

export default function OOH6 (): React.JSX.Element {
  return (
    <ContentLayout section='ooh 7' background='1'>
      <Component11
        images={images} title='VALLAS FIJAS' description='Contamos con formatos unificados de vallas fijas, ubicadas estratégicamente,
        llegando así a un segmento altamente cotizado.'
      />
    </ContentLayout>
  )
}
