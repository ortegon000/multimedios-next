import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multimedios - Prensa 3',
  description: 'Presentación multimedios'
}

const faces = [
  {
    name: 'Joaquin',
    lastName: 'López Dóriga',
    image: '/images/prensa/d4-20.png'
  },
  {
    name: 'Carlos',
    lastName: 'Marín',
    image: '/images/prensa/d4-19.png'
  },
  {
    name: 'Héctor',
    lastName: 'Aguilar Carmín',
    image: '/images/prensa/d4-18.png'
  },
  {
    name: 'Patricia',
    lastName: 'Armendáriz',
    image: '/images/prensa/d4-17.png'
  },
  {
    name: 'Regina',
    lastName: 'Reyes Heroles',
    image: '/images/prensa/d4-16.png'
  },
  {
    name: 'Diego',
    lastName: 'Fernández',
    image: '/images/prensa/d4-15.png'
  },
  {
    name: 'Rafael',
    lastName: 'Pérez Gay',
    image: '/images/prensa/d4-14.png'
  },
  {
    name: 'Zoé',
    lastName: 'Robledo',
    image: '/images/prensa/d4-13.png'
  },
  {
    name: 'Carlos',
    lastName: 'Puig',
    image: '/images/prensa/d4-12.png'
  },
  {
    name: 'Jairo',
    lastName: 'Calixto',
    image: '/images/prensa/d4-11.png'
  },
  {
    name: 'Irene',
    lastName: 'Vallejo',
    image: '/images/prensa/d4-1.png'
  },
  {
    name: 'Ana Ma.',
    lastName: 'Olabuenaga',
    image: '/images/prensa/d4-2.png'
  },
  {
    name: 'Jesús',
    lastName: 'Rangel',
    image: '/images/prensa/d4-3.png'
  },
  {
    name: 'Rafael Ocampo',
    lastName: 'López',
    image: '/images/prensa/d4-4.png'
  },
  {
    name: 'Susana',
    lastName: 'Moscatel',
    image: '/images/prensa/d4-5.png'
  },
  {
    name: 'Álvaro',
    lastName: 'Cueva',
    image: '/images/prensa/d4-6.png'
  },
  {
    name: 'Ricardo',
    lastName: 'Raphael',
    image: '/images/prensa/d4-7.png'
  },
  {
    name: 'Xavier',
    lastName: 'Velasco',
    image: '/images/prensa/d4-8.png'
  },
  {
    name: 'Diego',
    lastName: 'Osorno',
    image: '/images/prensa/d4-9.png'
  },
  {
    name: 'Salvador',
    lastName: 'Guerrero',
    image: '/images/prensa/d4-10.png'
  }

]

function Prensa (): React.JSX.Element {
  return (
    <ContentLayout section='prensa'>
      <section className='max-w-5xl mx-auto px-2 mt-4'>
        <h1 className='text-2xl font-bold text-center mb-2'>LÍDERES EN FIRMAS</h1>

        <p className='border border-grayDark p-4 rounded-md mb-4 max-w-md mx-auto'>
          Más de 40 líderes de opinión por día. Más plumas vs. la competencia.
          Reconocidos editorialistas cuya opinión aporta valor inigualable a los
          contenidos que ofrecemos.
        </p>

        <div className='flex gap-4 flex-wrap justify-center bg-grayDark px-2 lg:px-8 py-4 md:m-4 rounded-md'>
          {
            faces.map((item, key) => (
              <div key={key} className='text-grayLight text-xs flex flex-col justify-center group'>
                <img src={item.image} alt='' className='h-16 w-16 rounded-full object-contain mx-auto group-hover:scale-110 transition-transform' />
                <div className='group-hover:text-white mt-1'>
                  <span className='text-center block'>{item.name}</span>
                  <strong className='text-center block'> {item.lastName}</strong>
                </div>
              </div>
            ))
          }
        </div>

      </section>
    </ContentLayout>
  )
}

export default Prensa
