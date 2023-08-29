import ContentLayout from "../../content-layout";
import React from "react";
import Component4 from "../../components/layouts/component4";
import Button from "../../components/button";

const title = "D99";
const image = "/images/radio/circle-left-4.png";
const logo = "/images/radio/d99.png";
const section = "radio 8";
const background = "2";
const audio = "/audios/radio/1.mp3";

export default function RadioD8(): React.JSX.Element {
  return (
    <ContentLayout section={section} background={background}>
      <Component4 title={title} image={image} logo={logo} audio={audio}>
        <>
          <p>Lo mejor de la música internacional</p>
          <p className="mt-4">
            <strong>¡La estación que genera tus sentidos!</strong>
          </p>
          <p className="mt-4">
            Con Controles remotos llenos de energía y juventud presentes en los
            festivales más reconocidos de Monterrey y para cerrar la transmisión
            de los partidos de Tigres y Rayados en vivo con la narración más
            relajada para el regio.
          </p>
          <p className="mt-4 flex justify-end">
            <Button url="/radio/radio-9" text="CABINA" />
          </p>
        </>
      </Component4>
    </ContentLayout>
  );
}
