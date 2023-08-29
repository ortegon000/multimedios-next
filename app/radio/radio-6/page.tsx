import ContentLayout from "../../content-layout";
import React from "react";
import Component4 from "../../components/layouts/component4";

const title = "LA CALIENTE";
const image = "/images/radio/circle-left-2.png";
const logo = "/images/radio/caliente.png";
const section = "radio 6";
const background = "2";
const audio = "/audios/radio/1.mp3";

export default function RadioD6(): React.JSX.Element {
  return (
    <ContentLayout section={section} background={background}>
      <Component4 title={title} image={image} logo={logo} audio={audio}>
        <>
          <p>
            Somos fuego, somos La Caliente <strong>¡La que te prende!</strong>
          </p>
          <p className="mt-4">
            Música de banda y grupera líder en Monterrey, que todo regio
            escucha.Una estación especialista en controles remoto con su toque
            único, los mejores shows y personajes solo por La Caliente.
          </p>
          <p className="mt-4 text-xl font-bold">
            TOP #1 al #3 en todas las plazas donde tenemos presencia
          </p>
        </>
      </Component4>
    </ContentLayout>
  );
}
