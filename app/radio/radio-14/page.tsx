import ContentLayout from '../../content-layout'
import React from 'react'
import Component7 from '../../components/layouts/component7'
import Button from '../../components/button'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multimedios - Radio 14',
  description: 'Presentación multimedios'
}

const section = 'radio 14'
const background = '2'

export default function RadioD14 (): React.JSX.Element {
  return (
    <ContentLayout section={section} background={background}>
      <div className='px-4'>
        <Component7
          logo='/images/radio/la-deportiva.png'
          images={[
            {
              image: '/images/radio/la-deportiva-cabina-1.png',
              size: '30%'
            },
            {
              image: '/images/radio/la-deportiva-cabina-2.png',
              size: '40%'
            },
            {
              image: '/images/radio/la-deportiva-cabina-3.png',
              size: '30%'
            }
          ]}
        />
        <div className='mt-4 max-w-4xl mx-auto text-sm flex'>
          <Button url='/radio/radio-13' dark back text='Volver a La Deportiva' />
        </div>
      </div>
    </ContentLayout>
  )
}
