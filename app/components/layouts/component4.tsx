import React from 'react'
import CircleLeft from '../circle-left'
import Component5 from './component5'

export default function Component4 ({
  children,
  title,
  image,
  logo,
  audio
}: {
  children: React.JSX.Element;
  title: string;
  image: string;
  logo: string;
  audio: string;
}): React.JSX.Element {
  return (
    <>
      <CircleLeft image={image} />

      <div className='mt-4'>
        <Component5 logo={logo} title={title} audio={audio}>
          {children}
        </Component5>
      </div>
    </>
  )
}
