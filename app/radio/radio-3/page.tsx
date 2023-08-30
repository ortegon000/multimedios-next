import ContentLayout from '../../content-layout'
import Component3 from '../../components/layouts/component3'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multimedios - Radio 3',
  description: 'Presentación multimedios'
}

const cards = [
  {
    icon: '/images/radio/lupe.png',
    title: 'Cadena la Lupe',
    subtitle: '22 emisoras',
    columns: 'columns-3 md:columns-2',
    list: [
      'Monterrey',
      'Linares',
      'Torreón',
      'Durango',
      'Tampico',
      'Nuevo Laredo',
      'Cd. Victoria',
      'Chihuahua',
      'Cd. Juárez',
      'Cd. Cuauhtémoc',
      'Parral',
      'San Luis Potosí',
      'Tijuana ',
      'Ensenada',
      'Mazatlán',
      'Tepic',
      'Puerto, Ver.',
      'Xalapa',
      'Fortin de las Flores',
      'Culiacán',
      'Guadalajara',
      'Saltillo'
    ]
  },
  {
    icon: '/images/radio/caliente.png',
    title: 'Cadena Caliente',
    subtitle: '12 emisoras',
    columns: 'columns-2 md:columns-1',
    list: [
      'Monterrey',
      'Linares',
      'Torreón',
      'Monclova',
      'Reynosa',
      'Tampico',
      'Nuevo Laredo',
      'Chihuahua',
      'Cd. Cuauhtémoc',
      'San Luis Potosí',
      'Ensenada',
      'Tepic'
    ]
  },
  {
    icon: '/images/radio/hits.png',
    title: 'Cadena HITS',
    subtitle: '6 emisoras',
    columns: 'columns-2 md:columns-1',
    list: [
      'Monterrey',
      'Torreón',
      'Chihuahua',
      'Saltillo',
      'Tampico',
      'Reynosa'
    ]
  }
]

export default function RadioD3 (): React.JSX.Element {
  return (
    <ContentLayout section='radio 3'>
      <Component3
        cards={cards}
        title='CADENA'
        textButton='Ver Cadena'
        urlButton='/radio/radio-4'
        subsection='radio-3'
      />
    </ContentLayout>
  )
}
