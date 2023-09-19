import ContentLayout from '../../content-layout'
import React from 'react'
import Component4 from '../../components/layouts/component4'
import Button from '../../components/button'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multimedios - Radio 10',
  description: 'Presentación multimedios'
}

const title = 'FMTU'
const image = '/images/radio/circle-left-5.png'
const logo = '/images/radio/fmtu.png'
const section = 'radio 10'
const background = '2'
const audio = '/audios/radio/fmtu.mp3'

export default function RadioD10 (): React.JSX.Element {
  return (
    <ContentLayout section={section} background={background}>
      <Component4 title={title} image={image} logo={logo} audio={audio}>
        <>
          <p>La estación que revolucionó la radio</p>
          <p className='mt-4'>
            Las tendencias del momento con música juvenil TOP 40 en español e
            inglés.
          </p>
          <p className='mt-4 text-xl font-bold'>
            Música pop, urbano y la mejor música actual
          </p>
          <p className='mt-4 flex justify-end'>
            <Button url='/radio/radio-11' text='CABINA' />
          </p>
        </>
      </Component4>
    </ContentLayout>
  )
}
