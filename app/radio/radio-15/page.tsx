import ContentLayout from '../../content-layout'
import React from 'react'
import Component4 from '../../components/layouts/component4'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multimedios - Radio 15',
  description: 'Presentación multimedios'
}

const title = 'LA GRAN AW'
const image = '/images/radio/circle-left-8.png'
const logo = '/images/radio/aw.png'
const section = 'radio 15'
const background = '2'
const audio = '/audios/radio/1.mp3'

export default function RadioD15 (): React.JSX.Element {
  return (
    <ContentLayout section={section} background={background}>
      <Component4 title={title} image={image} logo={logo} audio={audio}>
        <>
          <p>
            Estación de noticias con la fuerza de la palabra hablada y la
            credibilidad de nuestros noticieros por más de 12 hrs. diaras.
          </p>
          <p className='mt-4 text-xl font-bold'>
            Complementamos esta estación con música inolvidable tradicional para
            los regiomontanos.
          </p>
        </>
      </Component4>
    </ContentLayout>
  )
}
