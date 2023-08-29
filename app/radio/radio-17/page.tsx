import ContentLayout from "../../content-layout";
import React from "react";
import Component4 from "../../components/layouts/component4";

const title = "HITS";
const image = "/images/radio/circle-left-10.png";
const logo = "/images/radio/hits.png";
const section = "radio 17";
const background = "2";
const audio = "/audios/radio/1.mp3";

export default function RadioD17(): React.JSX.Element {
  return (
    <ContentLayout section={section} background={background}>
      <Component4 title={title} image={image} logo={logo} audio={audio}>
        <>
          <p>
            La estación con la música de pop en español, líder en su género que
            te leva a los hits del recuerdo y los de hoy.
          </p>
          <p className="mt-4 font-bold">
            Con sus shows y música es el espacio preferido de las familias y
            amas de casa.
          </p>
          <p className="mt-4 font-bold">¡SOLO HITS!</p>
        </>
      </Component4>
    </ContentLayout>
  );
}
