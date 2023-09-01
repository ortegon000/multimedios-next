import React from 'react'
import ContentLayout from '../../content-layout'

import { Metadata } from 'next'
import VideoPlayer from '@/app/components/video-player'

export const metadata: Metadata = {
  title: 'Multimedios - OOH 12',
  description: 'Presentación multimedios'
}

export default function OOH12 (): React.JSX.Element {
  return (
    <ContentLayout section='ooh 12' background='1'>
      <section className='w-full px-2 max-w-3xl mx-auto mt-4'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>AAEE</h1>
        </div>

        <div className='rounded-md overflow-hidden'>
          <VideoPlayer video='/videos/intro.webm' />
        </div>
      </section>
    </ContentLayout>
  )
}
