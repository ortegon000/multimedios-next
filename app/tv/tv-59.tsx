import ContentLayout from "../content-layout";
import React from "react";
import Button from "../../components/button";
import Zoom from "react-img-zoom";

export default function Tv(): React.JSX.Element {
  return (
    <ContentLayout section="tv 59" background="3">
      <section className="mt-10 max-w-4xl mx-auto">
        <div className="flex justify-center hover:cursor-zoom-in animate__animated animate__zoomInDown">
          <Zoom
            img="/images/tv/d59.png"
            zoomScale={1.5}
            width={800}
            height={356}
          />
        </div>

        <div className="mt-4 flex justify-end">
          <Button
            url="/tv/tv-3"
            text="REGRESAR A PROGRAMACIÓN"
            dark={true}
            className="text-sm"
          />
        </div>
      </section>
    </ContentLayout>
  );
}
