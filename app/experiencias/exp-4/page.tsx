import ContentLayout from '../../content-layout'
import React from 'react'
import { Metadata } from 'next'
import CircleLeft from '@/app/components/circle-left'
import NextImage from '@/app/components/next-image'

export const metadata: Metadata = {
  title: 'Multimedios - Experiancias 4',
  description: 'Presentación multimedios'
}

export default function RadioD1 (): React.JSX.Element {
  return (
    <ContentLayout section='experiencias'>
      <>
        <CircleLeft image='/images/experiencias/d4-1.png' />
        <section className='max-w-2xl mx-auto px-2 mt-4'>
          <div className='bg-grayLight/70 backdrop-blur p-2 rounded-md'>
            <NextImage src='/images/experiencias/d4-2.png' alt='' className='w-32 mx-auto' />
            <p className='text-lg font-bold mt-4'>
              Además, está en el corazón del corporativo, con lo cual hay salidas en vivo en Milenio TV, en streaming por Milenio.com, en las redes sociales (Facebook Live y Twitter). Hay notas previas, una cobertura especial posterior en Milenio Diario y un programa especial en Milenio TV el fin de semana siguiente.
            </p>
            <h2 className='text-ls font-bold pl-6 mt-4'>Este venue incluye:</h2>
            <ul className='list-disc pl-8'>
              <li>Organización integral del evento desde la concepción del tema hasta la convocatoria de speakers y moderadores.</li>
              <li>Creación de toda la imagen y los paquetes gráficos de cada evento (invitaciones digitales, landing page, anuncios en print/web/tv).</li>
              <li>Anuncios de casa previos en todas las plataformas.</li>
              <li>Edecanes en piso.</li>
              <li>Staff técnico y operativo.</li>
              <li>Señalética en puntos estratégicos.</li>
            </ul>
            <p className='bg-grayDark rounded-md p-4 text-grayLight mt-4 text-sm'>
              <strong>… Y lo más poderoso, que es el “músculo informativo” de todo GRUPO MILENIO:</strong> ºMicrositio en Milenio.com ºEspeciales en Milenio TV. ºCobertura exclusiva en Milenio Diario. ºRedes sociales. ºCampaña de comunicación previa multiplataforma para promoción del evento.
            </p>
          </div>
        </section>

      </>
    </ContentLayout>
  )
}
