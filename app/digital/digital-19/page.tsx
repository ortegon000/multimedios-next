import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'

import CardBgBlur from '@/app/components/card-bg-blue'
import Component15 from '@/app/components/layouts/component15'

export const metadata: Metadata = {
  title: 'Multimedios - Digital 19',
  description: 'Presentación multimedios'
}

const images = [
  '/images/digital/d19-1.png',
  '/images/digital/d19-2.png'
]
const logo = '/images/digital/d19.png'
const title = 'INFOGRAFÍA'

function Digital (): React.JSX.Element {
  return (
    <ContentLayout section='digital'>
      <>
        <h1 className='text-2xl font-bold text-center my-2'>CASOS DE ÉXITO</h1>

        <CardBgBlur>
          <Component15 images={images} logo={logo} title={title} />
        </CardBgBlur>
      </>
    </ContentLayout>
  )
}

export default Digital
