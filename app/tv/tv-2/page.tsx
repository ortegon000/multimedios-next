import React from 'react'
import ContentLayout from '../../content-layout'
import Component2 from '../../components/layouts/component2'

const cities = [
  'MONTERREY 6.1',
  'LINARES 6.1',
  'CDMX 6.1',
  'MÉRIDA 6.1',
  'CANCÚN 6.1',
  'CHIAPAS 6.1',
  'GUADALAJARA 6.1',
  'TEPIC 6.1',
  'CHIHUAHUA 6.1',
  'CD. JUÁREZ 6.1',
  'EL PASO, TX. 6.1',
  'TORREÓN 6.1',
  'SALTILLO 6.1',
  'DURANGO 6.1',
  'LEÓN 6.1',
  'PUEBLA 6.1',
  'TLAXCALA 6.1',
  'CD. VICTORIA 6.1',
  'MANTE 6.1',
  'TAMPICO 6.1',
  'CD. VALLES 6.1',
  'REYNOSA 6.1',
  'MATAMOROS 6.1',
  'NUEVO LAREDO 6.1'
]

export default function Tv2 (): React.JSX.Element {
  return (
    <ContentLayout section='tv 2' background='1'>
      <Component2 col1={<Col1 />} col2={<Col2 />} subsection='tv-2' />
    </ContentLayout>
  )
}

function Col1 (): React.JSX.Element {
  return (
    <>
      <article className='bg-grayDark text-grayLight p-4 rounded-md'>
        <p className='text-sm'>
          <span className='text-lg font-bold'>
            Presencia en las siguientes ciudades
          </span>
        </p>
      </article>

      <article className='w-64 p-2 border border-grayDark bg-grayLight rounded-md mt-4'>
        <ul className='text-xs leading-4 columns-2'>
          {cities.map((city, key) => (
            <li key={key}>{city}</li>
          ))}
        </ul>
      </article>
    </>
  )
}

function Col2 (): React.JSX.Element {
  return (
    <div className='relative hover:bg-grayLight-50 transition rounded-md cursor-zoom-in flex justify-center'>
      {/* <Zoom
        img='/images/tv/cobertura-map.png'
        zoomScale={1.5}
        width={600}
        height={364}
      /> */}

      <div className='absolute top-0 right-0'>
        <div className='bg-grayDark text-grayLight rounded-md p-4'>
          <span className='text-3xl font-bold'>24 Ciudades</span>
          <br />
          <span className='text-xl'>Regionales</span>
          <img
            src='/images/tv/map-icon.png'
            alt=''
            className='radio-users-icon w-12 h-12 absolute bg-grayDark rounded-full border border-white top-0 left-0'
          />
        </div>

        <p className='text-3xl font-bold'>Más de 4</p>
        <p className='text-3xl'>millones</p>
        <p className='font-bold'>de Televidentes diario</p>
      </div>
    </div>
  )
}
