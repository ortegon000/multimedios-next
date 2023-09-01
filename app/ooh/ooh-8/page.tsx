import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Component11 from '@/app/components/layouts/component11'

export const metadata: Metadata = {
  title: 'Multimedios - OOH 8',
  description: 'Presentación multimedios'
}

const images = [
  '/images/ooh/d8-1.png',
  '/images/ooh/d8-2.png',
  '/images/ooh/d8-3.png'
]

export default function OOH8 (): React.JSX.Element {
  return (
    <ContentLayout section='ooh 8' background='1'>
      <Component11
        images={images} title='MEGA TÚNELES' description=''
      />
    </ContentLayout>
  )
}
