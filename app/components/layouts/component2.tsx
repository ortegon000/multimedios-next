import React from 'react'

export default function Component2 ({
  col1,
  col2,
  subsection
}: {
  col1: React.JSX.Element;
  col2: React.JSX.Element;
  subsection: string;
}): React.JSX.Element {
  return (
    <section className={`${subsection} max-w-4xl mx-auto mt-4`}>
      <section className='grid md:grid-cols-4 gap-2'>
        <div className='rounded-md max-w-full p-2'>{col1}</div>
        <div className='rounded-md md:col-span-3 p-2'>{col2}</div>
      </section>
    </section>
  )
}
