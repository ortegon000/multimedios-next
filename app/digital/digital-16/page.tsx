import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'

import CardBgBlur from '@/app/components/card-bg-blue'
import Component13 from '@/app/components/layouts/component14'

export const metadata: Metadata = {
  title: 'Multimedios - Digital 16',
  description: 'Presentación multimedios'
}

const image = '/images/digital/d16.png'
const logo = '/images/digital/d16_1.png'
const social = '/images/digital/d3-2.png'
const socialText = 'VIDEO POST FACEBOOK'
const data = [
  {
    value: '610,400',
    text: 'REPRODUCCIONES'
  },
  {
    value: '38,300',
    text: 'LIKES'
  },
  {
    value: '259',
    text: 'COMENTARIOS'
  },
  {
    value: '332',
    text: 'COMPARTIDOS'
  }
]
const bottomText = '***ALCANZÓ AL 35% DE SU AUDIENCIA TOTAL'

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
