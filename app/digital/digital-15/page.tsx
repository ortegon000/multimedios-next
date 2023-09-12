import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'

import CardBgBlur from '@/app/components/card-bg-blue'
import Component13 from '@/app/components/layouts/component14'

export const metadata: Metadata = {
  title: 'Multimedios - Digital 15',
  description: 'Presentación multimedios'
}

const image = '/images/digital/d15.png'
const logo = '/images/digital/d15_1.png'
const social = '/images/digital/d3-5.png'
const socialText = 'INSTAGRAM REEL'
const data = [
  {
    value: '26,802',
    text: 'CUENTAS ALCANZADAS EN PROMEDIO POR HISTORIA'
  },
  {
    value: '25,972',
    text: 'IMPACTOS'
  },
  {
    value: '71',
    text: 'INTERACCIONES'
  }
]
const bottomText = '***ALCANZÓ AL 10% DE SU AUDIENCIA TOTAL'

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
