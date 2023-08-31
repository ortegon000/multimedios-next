import ContentLayout from '../../content-layout'
import Component8 from '../../components/layouts/component8'
import React from 'react'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multimedios - Tv 58',
  description: 'Presentación multimedios'
}

export default function Tv58 (): React.JSX.Element {
  return (
    <ContentLayout section='tv 58' background='3'>
      <Component8
        videos={[
          '/videos/intro.webm'
        ]} title='Subtitle'
      />
    </ContentLayout>
  )
}
