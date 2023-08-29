import React from "react";
import ReactPlayer from "react-player";

interface Props {
  videos: any[];
  title?: string;
}

export default function Component8({
  videos,
  title,
}: Props): React.JSX.Element {
  return (
    <section className={`max-w-4xl mx-auto mt-4`}>
      <section className="relative">
        <div className="bg-blur blur-md absolute w-[120%] h-[120%] -translate-x-[10%] -z-10 inset-0 m-auto"></div>

        <div className="w-full bg-grayLight rounded-md p-4">
          <h1 className="text-center text-3xl font-bold">
            Acciones Especiales
          </h1>
          <h2 className="text-center text-2xl mb-4">{title}</h2>

          <div className="flex gap-4 justify-center items-center w-full animate__animated animate__bounce">
            {videos.map((video, key) => (
              <div
                className="player-wrapper rounded-xl overflow-hidden max-w-xl"
                key={key}
              >
                <ReactPlayer
                  className="react-player"
                  url={video}
                  width="100%"
                  height="100%"
                  controls={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
