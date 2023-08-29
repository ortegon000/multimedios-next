import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Metadata } from 'next'

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
          <h1 className='text-7xl mb-10 m-auto text-center hover:font-bold transition-all transform hover:-translate-y-2 hover:scale-105 w-[520px]'>
            <Link href='/menu' id='menu-link'>
              <img src='/images/logo_white.svg' />
            </Link>
          </h1>

          <ul className='flex justify-center items-center gap-8 [&>li>img]:h-14'>
            {menu.map((item, key) => (
              <li key={key}>
                <img src={item.image} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home
