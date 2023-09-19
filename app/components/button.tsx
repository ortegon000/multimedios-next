import Link from 'next/link'
import React from 'react'

export default function Button ({
  url,
  text,
  dark = false,
  back = false,
  className = ''
}: {
  url: any;
  text: string;
  dark?: boolean;
  back?: boolean;
  className?: string;
}): React.JSX.Element {
  const darkClass = dark
    ? 'bg-grayDark text-grayLight hover:bg-gray-900'
    : 'bg-grayLight text-grayDark hover:bg-white'

  const backButtonClass = back ? 'flex-row-reverse' : ''
  const backSvgClass = back ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'

  return (
    <span>
      <Link
        href={url} className={`${className} button group flex justify-center items-center py-2 px-6 rounded-3xl transition-all ${darkClass} ${backButtonClass}`}
      >
        <span>{text}</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className={`w-4 h-4 transition ${backSvgClass}`}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      </Link>
    </span>
  )
}
