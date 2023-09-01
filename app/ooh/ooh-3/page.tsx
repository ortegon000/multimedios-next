import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Multimedios - OOH 3',
  description: 'Presentación multimedios'
}

const list = [
  {
    name: 'Carteleras',
    url: '/'
  },
  {
    name: 'Muros',
    url: '/'
  },
  {
    name: 'Túneles',
    url: '/'
  },
  {
    name: 'Puentes Peatonales',
    url: '/'
  },
  {
    name: 'Vallas Fijas',
    url: '/'
  },
  {
    name: 'Pantallas Digitales',
    url: '/'
  },
  {
    name: 'Autobuses',
    url: '/'
  },
  {
    name: 'Vallas Móviles',
    url: '/'
  },
  {
    name: 'Impresión Digital',
    url: '/'
  }

]

function OOH3 (): React.JSX.Element {
  return (
    <ContentLayout section='ooh 3' background='1'>
      <section className='w-full px-2 max-w-2xl mx-auto mt-4 flex flex-wrap justify-center gap-2 md:gap-4'>
        {
            list.map((item, key) =>
              (
                <Link href={item.url} key={key} className='p-1.5 rounded-full border border-grayDark bg-grayLight'>
                  <div className='w-24 h-24 bg-grayDark text-grayLight flex justify-center items-center rounded-full text-center transition-all text-sm hover:rotate-[360deg]'>
                    {item.name}
                  </div>
                </Link>
              )
            )
        }
      </section>
    </ContentLayout>
  )
}

export default OOH3
