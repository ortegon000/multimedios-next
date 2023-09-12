import React from 'react'
import ContentLayout from '../../content-layout'
import Button from '@/app/components/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multimedios - Prensa 1',
  description: 'Presentación multimedios'
}

const buttons = [
  {
    name: 'COBERTURA',
    url: '/prensa/prensa-2'
  },
  {
    name: 'PERFIL DE LECTORÍA',
    url: '/prensa/prensa-5'
  },
  {
    name: 'FIRMAS',
    url: '/prensa/prensa-3'
  },
  {
    name: 'EDICIONES ESPECIALES',
    url: '/prensa/prensa-6'
  },
  {
    name: 'ALIANZAS',
    url: '/prensa/prensa-4'
  },
  {
    name: 'ESPACIOS DIFERENCIADOS',
    url: '/prensa/prensa-7'
  }
]

function Prensa (): React.JSX.Element {
  return (
    <ContentLayout section='prensa'>
      <section className='max-w-4xl mx-auto px-2 mt-4 md:flex'>
        <div>
          <img src='/images/prensa/d2.png' alt='' className='hover:scale-110 w-[80%] md:w-[95%] mx-auto transition-transform hover:rotate-12' />
        </div>

        <div className='w-full border border-grayDark bg-grayLight/50 backdrop-blur rounded-md p-4'>
          <h1 className='text-2xl font-bold'>Prensa</h1>
          <p>
            Somos uno de los diarios más poderosos e
            influyentes del país por la pluralidad y credibilidad
            editorial que manejamos.
            <strong>
              Posicionados como el
              segundo periódico de información general con
              mayor número de lectores.
            </strong>
          </p>
          <span className='relative w-44 mx-auto my-6 block border-b border-grayDark'>
            <span className='sliding-dot block w-3 h-3 bg-grayDark absolute rounded-full -translate-y-1/2 right-full mx-auto' />
            <span className='sliding-dot2 block w-2 h-2 bg-grayDark absolute rounded-full -translate-y-1/2 right-full mx-auto' />
          </span>

          <div className='grid md:grid-cols-2 gap-4 md:gap-2'>
            {
              buttons.map((item, key) => (
                <Button key={key} text={item.name} url={item.url} dark className='text-xs md:text-[10px]' />
              ))
            }
          </div>
        </div>
      </section>
    </ContentLayout>
  )
}

export default Prensa
