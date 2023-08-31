'use client'
import React from 'react'
import Plyr from 'plyr-react'
import 'plyr-react/plyr.css'

export default function VideoPlayer ({ video }: {video: string}) : React.JSX.Element {
  const plyrProps = {
    source: {
      type: 'video',
      sources: [
        {
          src: video,
          type: 'video/mp4'
        }
      ]
    }
  }

  return (
    <Plyr {...plyrProps} />
  )
}
