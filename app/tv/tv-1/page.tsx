import ContentLayout from '../../content-layout'
import CircleLeft from '../../components/circle-left'
import React from 'react'
import Button from '../../components/button'

export default function Tv1 (): React.JSX.Element {
  return (
    <ContentLayout section='tv 1' background='3'>
      <div>
        <CircleLeft image='/images/tv/circle-left-1.png' />

        <section className='tv-d1 mx-auto max-w-4xl mt-10 flex justify-end items-center'>
          <div className='w-7/12'>
            <div className='flex w-full'>
              <img
                src='/images/logo.png'
                alt=''
                className='w-32 object-contain animate__animated animate__bounce animate__repeat-2'
              />
              <div className='w-full p-4'>
                <h1 className='text-3xl font-bold'>Televisión en vivo.</h1>
                <p className='text-2xl mt-4'>
                  Noticias, Entretenimiento y Deportes
                  <strong> ¡Cerca de ti!</strong>
                </p>
                <p className='text-xl mt-4'>
                  Nos hemos colocado como el canal
                  <strong> favorito de millones de Mexicanos.</strong>
                </p>
              </div>
            </div>

            <div className='flex gap-4 mt-4'>
              <Button
                url='/tv/tv-2'
                text='COBERTURA'
                dark
                className='text-sm'
              />
              <Button
                url='/tv/tv-3'
                text='PROGRAMAS'
                dark
                className='text-sm'
              />
              <Button
                url='/tv/tv-51'
                text='ACCIONES ESPECIALES'
                dark
                className='text-sm'
              />
            </div>
          </div>
        </section>
      </div>
    </ContentLayout>
  )
}
