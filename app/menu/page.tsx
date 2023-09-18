import React from 'react'
import ListIcons from '../components/menu/list-icons'
import Link from 'next/link'
import NextImage from '../components/next-image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multimedios - Menu',
  description: 'Presentación multimedios'
}

function Menu (): React.JSX.Element {
  return (
    <>
      <main className='min-h-screen flex items-center justify-center max-w-2xl m-auto'>
        <div className='w-full'>
          <div>
            <h1 className='relative my-4 mx-auto text-center w-full max-w-sm'>
              <NextImage src='/images/logo.svg' alt='' />
            </h1>

            <ListIcons />
          </div>

          <div className='absolute bottom-2 left-2'>
            <Link
              href='/contacto'
              className='border border-black rounded-lg py-2 px-6 hover:bg-grayDark hover:text-grayLight transition-all text-lg flex items-center gap-2 group w-48 justify-center'
            >
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='absolute left-2 w-6 h-6 group-hover:w-12 group-hover:h-12 transition-all'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z' />
              </svg>

              <span>Contacto</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default Menu
