import ContentLayout from '../../content-layout'
import React from 'react'
import Component9 from '@/app/components/layouts/component9'

import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata (
  { params }: Props
): Promise<Metadata> {
  const slug = params.slug

  return {
    title: `Multimedios - Tv ${slug.split('-')[1]}`
  }
}

export default function Tv ({ params }: { params: { slug: string } }): React.JSX.Element {
  const slug = params.slug
  const slugSplited = slug.split('-')
  const number = Number(slugSplited[1])
  const section = slugSplited.join(' ')

  if (number >= 4 && number <= 50) {
    let title = ''
    if (number >= 4 && number <= 8) title = 'NOTICIAS MTY'
    if (number >= 9 && number <= 17) title = 'NOTICIAS CDMX'
    if (number >= 18 && number <= 26) title = 'DEPORTES MTY'
    if (number >= 27 && number <= 27) title = 'DEPORTES CDMX'
    if (number >= 28 && number <= 33) title = 'ENTRETENIMIENTO MTY'
    if (number >= 34 && number <= 42) title = 'ENTRETENIMIENTO CDMX'
    if (number >= 43 && number <= 50) title = 'BARRA NOCTURNA NACIONAL'

    return (
      <ContentLayout section={section} background='1'>
        <section className='max-w-5xl mx-auto mt-4 px-2'>
          <h1 className='mb-4 text-center text-2xl font-bold'>{title}</h1>

          <Component9 number={number} />
        </section>
      </ContentLayout>
    )
  }

  return <></>
}
