import React from 'react'

export default function Component1 ({
  title,
  col1,
  col2,
  col3,
  subsection
}: {
  title: string;
  col1: React.JSX.Element;
  col2: React.JSX.Element;
  col3: React.JSX.Element;
  subsection: string;
}): React.JSX.Element {
  return (
    <section className={`${subsection} max-w-4xl mx-auto`}>
      <h1 className='text-center font-bold text-xl my-4 max-w-md py-1 px-2 bg-grayDark mx-auto text-grayLight rounded-md'>
        {title}
      </h1>
      <section className='grid md:grid-cols-3 gap-2 px-2'>
        <div className='border border-grayDark rounded-md'>
          {col1}
        </div>
        <div className='border border-grayDark rounded-md'>
          {col2}
        </div>
        <div className='border border-grayDark rounded-md'>
          {col3}
        </div>
      </section>
    </section>
  )
}
