import React from 'react'
import ContentLayout from '../../content-layout'
import { Metadata } from 'next'

import CardBgBlur from '@/app/components/card-bg-blue'
import VideoPlayer from '@/app/components/video-player'
import Button from '@/app/components/button'

export const metadata: Metadata = {
  title: 'Multimedios - Digital 21',
  description: 'Presentación multimedios'
}

function Digital (): React.JSX.Element {
  return (
    <ContentLayout section='digital'>
      <>
        <h1 className='text-2xl font-bold text-center my-2'>CASOS DE ÉXITO</h1>

        <CardBgBlur>
          <>
            <div className='md:flex mb-4'>
              <img src='/images/digital/d21_1.png' alt='' className='h-12' />
              <div className=''>
                <div className='rounded-md overflow-hidden'>
                  <VideoPlayer video='/videos/intro.webm' />
                </div>
              </div>
            </div>

            <div className='flex'>
              <Button url='/digital/digital-13' text='REGRESAR A MENÚ CASOS DE ÉXITO' back dark className='text-sm' />
            </div>
          </>
        </CardBgBlur>
      </>
    </ContentLayout>
  )
}

export default Digital
