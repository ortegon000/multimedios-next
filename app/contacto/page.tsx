import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Multimedios - Contacto',
  description: 'Presentación multimedios'
}

function Contacto (): React.JSX.Element {
  return (
    <>
      <Head>
        <title>Contacto</title>
      </Head>

      <div className='min-h-screen flex justify-center items-center'>
        <Link href='/menu' className='border border-black rounded-lg py-2 px-6 transform hover:scale-110 hover:bg-grayDark hover:text-grayLight block transition text-lg'>
          Menu
        </Link>
      </div>
    </>
  )
}

export default Contacto
