import React from 'react'
import ContentLayout from '../../content-layout'
import Button from '@/app/components/button'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multimedios - OOH 12',
  description: 'Presentación multimedios'
}

export default function OOH12 (): React.JSX.Element {
  return (
    <ContentLayout section='ooh 12' background='1'>
      <section className='w-full px-2 max-w-5xl mx-auto mt-4'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>GRAN FORMATO</h1>
          <span className='p-1 border border-grayDark rounded-md text-sm'>IMPRESION DIGITAL</span>
        </div>

        <div className='md:flex gap-2'>
          <div className='mt-4 flex flex-col md:flex-row px-2 gap-2'>
            <img src='/images/ooh/d12.png' alt='' className='rounded-md mx-auto object-cover max-w-md' />
          </div>
          <div className='mt-4 p-2 bg-grayLight/70 rounded-md backdrop-blur max-w-md mx-auto text-sm'>
            <p>
              Contamos con 2 centros de impresión digital a gran formato,
              en las zonas norte y centro del país, operados por personal
              altamente calificado para dar vida a tus campañas y con
              alta tecnología para realizar impresión en:
            </p>
            <ul className='list-disc pl-6 mt-2'>
              <li>Lona front</li>
              <li>Lona back</li>
              <li>Lona mesh</li>
              <li>Vinil</li>
              <li>Pendones</li>
              <li>Displays</li>
              <li>Murales</li>
              <li>Banners</li>
              <li>Rotulaciones de flotillas y transporte urbano</li>
            </ul>
          </div>
        </div>

        <div className='flex mt-4 justify-center'>
          <Button url='/ooh/ooh-3' text='REGRESAR A FORMATOS' dark back className='' />
        </div>
      </section>
    </ContentLayout>
  )
}
