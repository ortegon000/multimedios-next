import ContentLayout from '../../content-layout'
import React from 'react'
import Component4 from '../../components/layouts/component4'

const title = 'LA LUPE'
const image = '/images/radio/circle-left-3.png'
const logo = '/images/radio/lupe.png'
const section = 'radio 7'
const background = '2'
const audio = '/audios/radio/1.mp3'

export default function RadioD7 (): React.JSX.Element {
  return (
    <ContentLayout section={section} background={background}>
      <Component4 title={title} image={image} logo={logo} audio={audio}>
        <>
          <p className='mt-4'>
            <strong>El fenómeno del país.</strong> TOP #1 al #3 en todas las
            plazas donde tenemos presencia.
          </p>
          <p className='mt-4'>
            Es el mejor mix de puros éxitos en español desde los 70´s hasta las
            canciones actuales que toda audiencia siempre quiere escuchar.
          </p>
          <p className='mt-4'>
            <strong>
              Pop + Banda + Norteño, Regional y Rock, todos lo géneros que te
              gustan y te traen recuerdos de todos los tiempos
            </strong>
          </p>
        </>
      </Component4>
    </ContentLayout>
  )
}
