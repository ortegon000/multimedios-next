import React from 'react'
import ListIcons from '../components/menu/list-icons'
import Link from 'next/link'
import Image from 'next/image'
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
            <h1 className='relative my-4 mx-auto text-center w-full max-w-sm h-16'>
              <Image src='/images/logo.svg' alt='' fill />
            </h1>

            <ListIcons />
          </div>

          <div className='absolute bottom-2 left-2'>
            <Link
              href='/contacto'
              className='border border-black rounded-lg py-2 px-6 transform hover:scale-110 hover:bg-grayDark hover:text-grayLight block transition text-lg'
            >
              Contacto
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default Menu
