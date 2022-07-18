import React from "react";

export default function Reveal({ slides }) {
  return (
    <div className="reveal">
      <div className="slides">
        <section>
          {slides.map((slide, index) => (
            <section
              id={slide.title.replace(/ /g, "")}
              key={index}
              data-background-color={slide.background}
            >
              <h1>{slide.title}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: slide.description }}
              ></div>
            </section>
          ))}
        </section>
      </div>
    </div>
  );
}
