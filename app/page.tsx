// 'use client'
// import React, { useEffect } from 'react'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Metadata } from 'next'
import NextImage from './components/next-image'

export const metadata: Metadata = {
  title: 'Multimedios',
  description: 'Presentación multimedios'
}

function Home (): React.JSX.Element {
  // useEffect(() => {
  //   const video = document.getElementById("intro-video");
  //   const content = document.getElementById("content");

  //   if (video !== null) {
  //     video.addEventListener("ended", function () {
  //       video.classList.add("hidden");
  //       content !== null && content.classList.remove("hidden");
  //     });
  //   }
  // });

  const menu = [
    {
      name: 'radio',
      image: '/images/icons_border_white/radio.svg'
    },
    {
      name: 'tv',
      image: '/images/icons_border_white/tv.svg'
    },
    {
      name: 'exterior',
      image: '/images/icons_border_white/exterior.svg'
    },
    {
      name: 'impresos',
      image: '/images/icons_border_white/impresos.svg'
    },
    {
      name: 'digital',
      image: '/images/icons_border_white/digital.svg'
    },
    {
      name: 'experiencias',
      image: '/images/icons_border_white/experiencias.svg'
    }
  ]

  return (
    <>
      <Head>
        <title>Multimedios - Inicio</title>
      </Head>

      <main
        className='min-h-screen bg-black flex items-center justify-center'
        id='swup'
      >
        {/* <video
          id="intro-video"
          src="./videos/intro.webm"
          muted
          autoPlay
          className="absolute inset-0 w-full h-full"
        ></video> */}

        <div className='text-white w-full' id='content'>
          <h1 className='text-7xl mb-10 m-auto text-center hover:font-bold transition-all transform hover:scale-105 w-full max-w-sm'>
            <Link href='/menu' id='menu-link'>
              <NextImage src='/images/logo_white.svg' className='w-[95%] h-10 mx-auto' />
            </Link>
          </h1>

          <ul className='flex justify-center items-center gap-6 px-4'>
            {menu.map((item, key) => (
              <li key={key}>
                <NextImage src={item.image} className='h-12 w-12' />
              </li>
            ))}
          </ul>

          <div className='mt-10 flex justify-center items-center'>
            <Link href='/menu' className='px-6 py-3 border border-white rounded-md hover:underline tracking-widest'>ABRIR PRESENTACIÓN</Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
