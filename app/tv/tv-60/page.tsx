import ContentLayout from '../../content-layout'
import React from 'react'
import Component10 from '../../components/layouts/component10'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multimedios - Tv 60',
  description: 'Presentación multimedios'
}

export default function Tv (): React.JSX.Element {
  return (
    <ContentLayout section='tv 60' background='3'>
      <Component10 image='/images/tv/d60.png' />
    </ContentLayout>
  )
}
