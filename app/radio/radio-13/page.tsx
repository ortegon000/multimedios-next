import ContentLayout from '../../content-layout'
import React from 'react'
import Component4 from '../../components/layouts/component4'
import Button from '../../components/button'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multimedios - Radio 13',
  description: 'Presentación multimedios'
}

const title = 'RG LA DEPORTIVA'
const image = '/images/radio/circle-left-7.png'
const logo = '/images/radio/la-deportiva.png'
const section = 'radio 13'
const background = '2'
const audio = '/audios/radio/1.mp3'

export default function RadioD13 (): React.JSX.Element {
  return (
    <ContentLayout section={section} background={background}>
      <Component4 title={title} image={image} logo={logo} audio={audio}>
        <>
          <p className='text-xl font-bold'>Somos lo mejor del deporte</p>
          <p className='mt-4'>
            Única estación 100% deportiva en Monterrey con contenido de lo más
            polémico y apasionado del futbol, americano, baseball, basketball y
            más.
          </p>
          <p className='mt-4 '>
            Solo nosotros transmitimos los partidos de Tigres y Rayados en vivo
            con todas las exclusivas del día a día.
          </p>
          <p className='mt-4 flex justify-end'>
            <Button url='/radio/radio-14' text='CABINA' />
          </p>
        </>
      </Component4>
    </ContentLayout>
  )
}
