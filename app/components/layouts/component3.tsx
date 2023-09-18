import React from 'react'
import Button from '../button'
import NextImage from '../next-image'

interface Props {
  cards: any[];
  title?: string;
  textButton: string;
  urlButton?: string;
  subsection?: string;
}

export default function Component3 ({
  cards,
  title,
  textButton,
  urlButton,
  subsection
}: Props): React.JSX.Element {
  return (
    <section className={`${subsection} max-w-4xl mx-auto mt-4`}>
      <section className='flex relative'>
        <div className='bg-blur blur-md absolute w-[120%] h-[120%] -translate-x-[10%] -z-10 inset-0 m-auto' />

        <div className='w-full bg-grayLight rounded-md md:grid md:grid-cols-3 gap-2 p-2'>
          <h1 className='md:col-span-3 text-center text-2xl font-bold'>{title}</h1>

          {cards.map((card, key) => (
            <div className='rounded-md border mb-4 md:mb-0' key={key}>
              <div className='flex md:block'>
                <span className='w-16 h-16 flex justify-center items-center mx-auto rounded-full border border-grayDark'>
                  <NextImage
                    src={card.icon}
                    alt=''
                    className='w-12 mx-auto'
                  />
                </span>

                <p className='w-2/3 md:w-full my-2 text-center rounded-lg bg-grayDark text-grayLight px-2 py-1 text leading-none'>
                  <span className='font-bold'>{card.title}:</span>
                  <br />
                  <span>{card.subtitle}</span>
                </p>
              </div>

              <ul
                className={`${card.columns} text-center text-sm leading-tight mt-2 mb-4 md:mt-0 md:mb-4`}
              >
                {card.list.map((item: any, cardKey: any) => (
                  <li key={cardKey}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className='flex col-span-3 justify-end mt-8 md:mt-0'>
            <Button url={urlButton} text={textButton} dark />
          </div>
        </div>
      </section>
    </section>
  )
}
