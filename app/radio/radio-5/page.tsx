import ContentLayout from '../../content-layout'
import CircleLeft from '../../components/circle-left'
import Link from 'next/link'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multimedios - Radio 5',
  description: 'Presentación multimedios'
}

const icons = [
  {
    name: 'LA CALIENTE',
    image: '/images/radio/caliente.png',
    url: '/radio/radio-6'
  },
  {
    name: 'LA LUPE',
    image: '/images/radio/lupe.png',
    url: '/radio/radio-7'
  },
  {
    name: 'D99',
    image: '/images/radio/d99.png',
    url: '/radio/radio-8'
  },
  {
    name: 'FMTU',
    image: '/images/radio/fmtu.png',
    url: '/radio/radio-10'
  },
  {
    name: 'CLASSIC',
    image: '/images/radio/classic.png',
    url: '/radio/radio-12'
  },
  {
    name: 'RG LA DEPORTIVA',
    image: '/images/radio/la-deportiva.png',
    url: '/radio/radio-13'
  },
  {
    name: 'LA GRAN AW',
    image: '/images/radio/med.png',
    url: '/radio/radio-15'
  },
  {
    name: 'MILENIO RADIO',
    image: '/images/radio/milenio.png',
    url: '/radio/radio-16'
  },
  {
    name: 'HITS',
    image: '/images/radio/hits.png',
    url: '/radio/radio-17'
  },
  {
    name: 'LA TKR',
    image: '/images/radio/tkr.png',
    url: '/radio/radio-18'
  },
  {
    name: 'LA T GRANDE',
    image: '/images/radio/la-t-grande.png',
    url: '/radio/radio-18'
  },
  {
    name: 'RADIO RECUERDO',
    image: '/images/radio/recuerdo.png',
    url: '/radio/radio-18'
  }
]

export default function RadioD5 (): React.JSX.Element {
  return (
    <ContentLayout section='radio 5' background='2'>
      <div>
        <CircleLeft image='/images/radio/circle-left-1.png' className='' />

        <section className='radio-d5 mx-auto max-w-4xl mt-4 flex justify-end items-center'>
          <div className='w-full md:w-1/2 px-4'>
            <h1 className='text-center text-3xl font-bold mb-8'>EMISORAS</h1>
            <ul className='grid grid-cols-4 gap-y-8'>
              {icons.map((item, key) => (
                <li
                  key={key}
                  className='relative text-center'
                >
                  <Link href={item.url} className='group'>
                    <span className='w-20 h-20 flex justify-center items-center mx-auto rounded-full border border-grayDark bg-grayLight'>
                      <img
                        src={item.image}
                        alt=''
                        className='w-14 object-contain mx-auto'
                      />
                    </span>

                    <span className='absolute inline-block bg-grayDark text-grayLight text-xs px-2 py-1 rounded-full left-0 right-0 translate-y-1/2 bottom-0 mx-auto opacity-0 max-w-0 group-hover:max-w-full group-hover:opacity-100 transition-all z-10'>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </ContentLayout>
  )
}
