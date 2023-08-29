import ContentLayout from "../../content-layout";
import React from "react";
import Component4 from "../../components/layouts/component4";

const title = "CLASSIC";
const image = "/images/radio/circle-left-6.png";
const logo = "/images/radio/classic.png";
const section = "radio 12";
const background = "2";
const audio = "/audios/radio/1.mp3";

export default function RadioD12(): React.JSX.Element {
  return (
    <ContentLayout section={section} background={background}>
      <Component4 title={title} image={image} logo={logo} audio={audio}>
        <>
          <p className="text-xl font-bold">
            Conectando cada época con tú época
          </p>
          <p className="mt-4">
            Única estación en su tipo “Rock en inglés” con clásicos desde los
            70” hasta lo mejor de hoy, siendo una tradición en el norte del país
          </p>
        </>
      </Component4>
    </ContentLayout>
  );
}
