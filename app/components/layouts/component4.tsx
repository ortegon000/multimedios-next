import React, { type ReactElement } from "react";
import CircleLeft from "../circle-left";
import Component5 from "./component5";

interface Props {
  children: ReactElement;
  title: string;
  image: string;
  logo: string;
  audio: string;
}

export default function Component4({
  children,
  title,
  image,
  logo,
  audio,
}: Props): React.JSX.Element {
  return (
    <>
      <CircleLeft image={image} />

      <div className="mt-10">
        <Component5 logo={logo} title={title} audio={audio}>
          {children}
        </Component5>
      </div>
    </>
  );
}
