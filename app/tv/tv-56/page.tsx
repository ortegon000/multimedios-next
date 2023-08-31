import ContentLayout from '../../content-layout'
import Component8 from '../../components/layouts/component8'
import React from 'react'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multimedios - Tv 56',
  description: 'Presentación multimedios'
}

export default function Tv56 (): React.JSX.Element {
  return (
    <ContentLayout section='tv 56' background='3'>
      <Component8
        videos={[
          '/videos/intro.webm'
        ]} title='Subtitle'
      />
    </ContentLayout>
  )
}
