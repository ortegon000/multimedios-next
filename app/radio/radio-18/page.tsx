import ContentLayout from '../../content-layout'
import React from 'react'
import Component6 from '../../components/layouts/component6'
import CircleLeft from '../../components/circle-left'
import Button from '../../components/button'

const image = '/images/radio/circle-left-11.png'
const section = 'radio 18'
const background = '2'

export default function RadioD18 (): React.JSX.Element {
  return (
    <ContentLayout section={section} background={background}>
      <>
        <CircleLeft image={image} />

        <Component6
          title='LA TKR'
          logo='/images/radio/tkr.png'
          audio='/audios/radio/1.mp3'
        >
          <>
            <p className='font-bold'>
              Música ranchera y regional, tradición en Monterrey
            </p>
          </>
        </Component6>

        <Component6
          title='LA T GRANDE'
          logo='/images/radio/la-t-grande.png'
          audio='/audios/radio/1.mp3'
        >
          <>
            <p className='font-bold'>
              Cuenta todo el año con la transmisión de lo partidos de Sultanes
              en exclusiva. Sin olvidar la música regional y noticieros
            </p>
          </>
        </Component6>

        <Component6
          title='RADIO RECUERDO'
          logo='/images/radio/recuerdo.png'
          audio='/audios/radio/1.mp3'
        >
          <>
            <p className='font-bold'>
              Música ranchera y regional, tradición en Monterrey
            </p>
          </>
        </Component6>

        <section className='mt-4 radio mx-auto max-w-4xl flex justify-end items-center'>
          <div className=''>
            <Button
              url='/radio/radio-5'
              text='REGRESAR A EMISORAS'
              dark
              className='text-sm'
            />
          </div>
        </section>
      </>
    </ContentLayout>
  )
}
