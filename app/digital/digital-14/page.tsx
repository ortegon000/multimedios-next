import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'

import CardBgBlur from '@/app/components/card-bg-blue'
import Component13 from '@/app/components/layouts/component14'

export const metadata: Metadata = {
  title: 'Multimedios - Digital 14',
  description: 'Presentación multimedios'
}

const image = '/images/digital/d14.png'
const logo = '/images/digital/d14_1.png'
const social = '/images/digital/d3-3.png'
const socialText = 'Tiktok'
const data = [
  {
    value: '520,200',
    text: 'REPRODUCCIONES'
  },
  {
    value: '52,500',
    text: 'LIKES'
  },
  {
    value: '102',
    text: 'COMENTARIOS'
  },
  {
    value: '232',
    text: 'COMPARTIDOS'
  }
]
const bottomText = '***ALCANZÓ AL 55% DE SU AUDIENCIA TOTAL'

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
