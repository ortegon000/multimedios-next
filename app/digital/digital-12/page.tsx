import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multimedios - Digital 12',
  description: 'Presentación multimedios'
}

const cards = [
  {
    title: 'PILARES AAEE DIGITALES',
    list: [
      'PATROCINIOS EXPERIENCE',
      'CUSTOM ADVERTISER',
      'BRANDED DAY',
      'DINÁMICAS'
    ]
  },
  {
    title: 'DATA DIGITAL',
    list: [
      'SENTIMENT RRSS',
      'PMP',
      'E-MAILING'
    ]
  },
  {
    title: 'DISPLAY',
    list: [
      'COMPRA DIRECTA',
      'COMPRA PROGRAMÁTICA'
    ]
  },
  {
    title: 'REDES SOCIALES',
    list: [
      'FACEBOOK',
      'TIKTOK',
      'INSTAGRAM',
      'TWITTER'
    ]
  },
  {
    title: 'CONTENT MARKETING',
    list: [
      'ILUSTRACIÓN',
      'IN BRAND',
      'COBERTURAS',
      'CONTENIDOS EDITORIALES'
    ]
  },
  {
    title: 'INFLUENCERS',
    list: [
      'ENTRETENIMIENTO',
      'LIFE & STYLE',
      'FITNESS',
      'NEWS',
      'SPORTS',
      'COCINA',
      'GAMER & TECH'
    ]
  }
]

function Digital (): React.JSX.Element {
  return (
    <ContentLayout section='digital'>
      <section className='max-w-5xl mx-auto px-2 mt-4'>
        <h1 className='text-center text-2xl font-bold'>
          SOLUCIONES DIGITALES
        </h1>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-4 mt-8'>
          {
            cards.map((card, key) => (
              <div key={key} className='border border-grayDark rounded-md pt-10 pb-4 relative bg-grayLight'>
                <h2 className='bg-grayDark text-grayLight absolute right-0 left-0 mx-auto w-32 rounded-md top-0 h-14 flex justify-center items-center text-center -translate-y-1/2 font-bold'>{card.title}</h2>
                <ul className='text-center text-sm [&>:not(:last-child)]:border-b [&>:not(:last-child)]:border-grayDark px-4'>
                  {
                    card.list.map((list, key) => (
                      <li key={key} className='border-dashed py-1'>{list}</li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </section>
    </ContentLayout>
  )
}

export default Digital
