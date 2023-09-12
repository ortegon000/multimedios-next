import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'

import CardBgBlur from '@/app/components/card-bg-blue'
import Component13 from '@/app/components/layouts/component14'

export const metadata: Metadata = {
  title: 'Multimedios - Digital 18',
  description: 'Presentación multimedios'
}

const image = '/images/digital/d18.png'
const logo = '/images/digital/d18_1.png'
const social = ''
const socialText = 'VIDEO ILUSTRACIÓN'
const data = [
  {
    value: '3,092,335',
    text: 'PERSONAS ALCANZADAS'
  },
  {
    value: '4,298',
    text: 'INTERACCIONES'
  }
]
const bottomText = ''

function Digital (): React.JSX.Element {
  return (
    <ContentLayout section='digital'>
      <CardBgBlur>
        <Component13 image={image} logo={logo} social={social} socialText={socialText} data={data} bottomText={bottomText} />
      </CardBgBlur>
    </ContentLayout>
  )
}

export default Digital
