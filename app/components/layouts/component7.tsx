import React, { useState } from "react";
import Atropos from "atropos/react";

import "atropos/css";

interface Props {
  logo: string;
  images: any[];
}

export default function Component7({ logo, images }: Props): React.JSX.Element {
  const [translate, setTranslate] = useState("");

  const handleMouseEnter = (key: number): void => {
    if (key === 1) {
      setTranslate("");
    }

    if (key === 0) {
      setTranslate("hover:translate-x-16");
    }

    if (key === 2) {
      setTranslate("hover:-translate-x-16");
    }
  };

  return (
    <>
      <div className="flex items-center gap-4 justify-center mt-10">
        <span className="flex justify-center items-center w-20 h-20 rounded-full border border-grayDark">
          <img src={logo} alt="" className="h-10 object-cover" />
        </span>
        <h1 className="text-3xl font-bold">CABINA</h1>
      </div>

      <div className="flex max-w-4xl mt-4 mx-auto justify-center items-center gap-4">
        {images.map((item, key) => (
          <div
            className={`${translate} hover:scale-150 transition-all hover:z-50`}
            key={key}
            onMouseEnter={() => {
              handleMouseEnter(key);
            }}
          >
            <Atropos>
              <img
                src={item.image}
                alt=""
                className="object-contain h-full w-full animate__animated animate__jackInTheBox"
              />
            </Atropos>
          </div>
        ))}
      </div>
    </>
  );
}
