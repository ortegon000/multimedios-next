import ContentLayout from '../../content-layout'
import React from 'react'
import Component7 from '../../components/layouts/component7'
import Button from '../../components/button'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multimedios - Radio 9',
  description: 'Presentación multimedios'
}

const section = 'radio 9'
const background = '2'

export default function RadioD9 (): React.JSX.Element {
  return (
    <ContentLayout section={section} background={background}>
      <>
        <Component7
          logo='/images/radio/d99.png'
          images={[
            {
              image: '/images/radio/d99-cabina-1.png',
              size: '30%'
            },
            {
              image: '/images/radio/d99-cabina-2.png',
              size: '30%'
            },
            {
              image: '/images/radio/d99-cabina-3.png',
              size: '30%'
            }
          ]}
        />
        <div className='mt-4 flex max-w-4xl mx-auto text-sm'>
          <Button url='/radio/radio-8' dark back text='Volver a D99' />
        </div>
      </>
    </ContentLayout>
  )
}
