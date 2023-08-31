import ContentLayout from '../../content-layout'
import React from 'react'
import Button from '../../components/button'
import ZoomImage from '@/app/components/zoom-image'

import Component10 from '../../components/layouts/component10'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multimedios - Tv 61',
  description: 'Presentación multimedios'
}

export default function Tv (): React.JSX.Element {
  return (
    <ContentLayout section='tv 61' background='3'>
      <Component10 image='/images/tv/d61.png' />
    </ContentLayout>
  )
}
