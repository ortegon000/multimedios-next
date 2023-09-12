import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'

import CardBgBlur from '@/app/components/card-bg-blue'
import Component13 from '@/app/components/layouts/component14'

export const metadata: Metadata = {
  title: 'Multimedios - Digital 17',
  description: 'Presentación multimedios'
}

const image = '/images/digital/d17.png'
const logo = '/images/digital/d17_1.png'
const social = '/images/digital/d3-3.png'
const socialText = 'TIKTOK'
const data = [
  {
    value: '1,300,000',
    text: 'REPRODUCCIONES'
  },
  {
    value: '38,300',
    text: 'LIKES'
  },
  {
    value: '792',
    text: 'COMENTARIOS'
  },
  {
    value: '1,523',
    text: 'COMPARTIDOS'
  }
]
const bottomText = '***ALCANZÓ AL 52% DE SU AUDIENCIA TOTAL'

function Digital (): React.JSX.Element {
  return (
    <ContentLayout section='digital'>
      <>
        <h1 className='text-2xl font-bold text-center my-2'>CASOS DE ÉXITO</h1>
        <CardBgBlur>
          <Component13 image={image} logo={logo} social={social} socialText={socialText} data={data} bottomText={bottomText} />
        </CardBgBlur>
      </>
    </ContentLayout>
  )
}

export default Digital
