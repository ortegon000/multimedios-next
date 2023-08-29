import ContentLayout from '../../content-layout'
import React from 'react'
import Component4 from '../../components/layouts/component4'

const title = 'MILENIO RADIO'
const image = '/images/radio/circle-left-9.png'
const logo = '/images/radio/milenio.png'
const section = 'radio 16'
const background = '2'
const audio = '/audios/radio/1.mp3'

export default function RadioD16 (): React.JSX.Element {
  return (
    <ContentLayout section={section} background={background}>
      <Component4 title={title} image={image} logo={logo} audio={audio}>
        <>
          <p className='text-xl font-bold'>
            Todas las noticias que están pasando momento a momento, minuto a
            minuto.
          </p>
          <p className='mt-4'>
            Además de segmentos de entretenimiento, cultura, deporte, entre
            otros. Para todo público que le gusta mantenerse informado de los
            hechos más relevantes que ocurren dentro y fuera del país
          </p>
        </>
      </Component4>
    </ContentLayout>
  )
}
