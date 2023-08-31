import React from 'react'
import VideoPlayer from '../video-player'

export default function Component8 ({
  videos,
  title
}: {
  videos: any[];
  title?: string;
}): React.JSX.Element {
  return (
    <section className='max-w-4xl mx-auto mt-4 px-2'>
      <section className='relative overflow-hidden'>
        <div className='bg-blur blur-md absolute w-[120%] h-[120%] -translate-x-[10%] -z-10 inset-0 m-auto' />

        <div className='w-full bg-grayLight rounded-md p-4'>
          <h1 className='text-center text-3xl font-bold'>
            Acciones Especiales
          </h1>
          <h2 className='text-center text-2xl mb-4'>{title}</h2>

          <div className='flex flex-col md:flex-row gap-4 justify-center items-center w-full'>
            {videos.map((video, key) => (
              <div
                className='player-wrapper rounded-md overflow-hidden max-w-lg'
                key={key}
              >
                <VideoPlayer video={video} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}
