import ContentLayout from '../../content-layout'
import React from 'react'
import Component7 from '../../components/layouts/component7'
import Button from '../../components/button'

const section = 'radio 11'
const background = '2'

export default function RadioD11 (): React.JSX.Element {
  return (
    <ContentLayout section={section} background={background}>
      <>
        <Component7
          logo='/images/radio/fmtu.png'
          images={[
            {
              image: '/images/radio/fmtu-cabina-1.png',
              size: '30%'
            },
            {
              image: '/images/radio/fmtu-cabina-2.png',
              size: '40%'
            },
            {
              image: '/images/radio/fmtu-cabina-3.png',
              size: '30%'
            }
          ]}
        />
        <div className='mt-4 max-w-4xl mx-auto text-sm'>
          <Button url='/radio/radio-10' dark text='Volver a FMTU' />
        </div>
      </>
    </ContentLayout>
  )
}
