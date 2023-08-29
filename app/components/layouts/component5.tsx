import React from "react";
import Button from "../button";

interface Props {
  children: React.JSX.Element;
  title: string;
  logo: string;
  audio: string;
}

export default function Component5({
  children,
  logo,
  title,
  audio,
}: Props): React.JSX.Element {
  return (
    <section className="radio mx-auto max-w-4xl flex justify-end items-center">
      <div className="w-7/12 flex gap-4">
        <div className="w-32">
          <span className="flex justify-center items-center p-2 border border-grayDark rounded-full animate__animated animate__bounce animate__infinite animate__repeat-2">
            <img src={logo} alt="" className="h-20 w-20 object-contain" />
          </span>
        </div>

        <div className="w-full">
          <h1 className="my-4 text-3xl font-bold">{title}</h1>
          <div className="bg-grayDark rounded-md text-grayLight p-4">
            <div>{children}</div>

            <div className="flex mt-4 justify-end">
              <audio controls src={audio}></audio>
            </div>
          </div>

          <div className="mt-4">
            <Button
              url="/radio/radio-5"
              text="REGRESAR A EMISORAS"
              dark={true}
              className="text-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
