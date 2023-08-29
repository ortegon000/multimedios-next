import ContentLayout from '../content-layout'
import Component8 from '../components/layouts/component8'
import React from 'react'

export default function Tv53 (): React.JSX.Element {
  return (
    <ContentLayout section='tv 53' background='3'>
      <Component8
        videos={[
          '/videos/intro.webm',
          '/videos/intro.webm'
        ]} title='Subtitle'
      />
    </ContentLayout>
  )
}
