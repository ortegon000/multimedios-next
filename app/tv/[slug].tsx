import ContentLayout from "../content-layout";
import React from "react";
import Button from "../../components/button";
import { useRouter } from 'next/router';
import Atropos from "atropos/react";

import "atropos/css";

export default function Tv(): React.JSX.Element {
  const router = useRouter();

  const slug = new String(router.query.slug);
  if (slug === undefined) return null;

  const slugSplited = slug.split("-");
  const number = Number(slugSplited[1]);
  const section = slugSplited.join(" ");

  if (number >= 4 && number <= 50) {
    let title = "";
  if (number >= 4 && number <= 8) title = "NOTICIAS MTY";
  if (number >= 9 && number <= 17) title = "NOTICIAS CDMX";
  if (number >= 18 && number <= 26) title = "DEPORTES MTY";
  if (number >= 27 && number <= 27) title = "DEPORTES CDMX";
  if (number >= 28 && number <= 33) title = "ENTRETENIMIENTO MTY";
  if (number >= 34 && number <= 42) title = "ENTRETENIMIENTO CDMX";
  if (number >= 43 && number <= 50) title = "BARRA NOCTURNA NACIONAL";
    return (
      <ContentLayout section={section} background="1">
        <section className="max-w-4xl mx-auto mt-4">
          <h1 className="mb-4 text-center text-2xl font-bold">{title}</h1>

          <div className="flex justify-center items-center gap-2">
            <Atropos className="hover:scale-110 transition-transform hover:translate-x-16">
              <div className="">
                <img src={`/images/tv/d${number}-1.png`} alt="" className="" />
              </div>
            </Atropos>
            <Atropos className="hover:scale-110 transition-transform ">
              <div>
                <img src={`/images/tv/d${number}-2.png`} alt="" />
              </div>
            </Atropos>
            <Atropos className="hover:scale-110 transition-transform hover:-translate-x-8">
              <div>
                <img
                  src={`/images/tv/d${number}-3.png`}
                  alt=""
                  className="bg-grayLight"
                />
              </div>
            </Atropos>
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
}
