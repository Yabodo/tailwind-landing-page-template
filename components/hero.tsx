import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";

const templateJson = {
  sectionClass: "relative",
  divClass: [
    {
      type: "Illustration behind hero content",
      class:
        "absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1",
      ariaHidden: "true",
      svg: {
        width: "1360",
        height: "578",
        viewBox: "0 0 1360 578",
        xmlns: "http://www.w3.org/2000/svg",
        defs: {
          linearGradient: {
            id: "illustration-01",
            stops: [
              {
                color: "#FFF",
                offset: "0%",
              },
              {
                color: "#EAEAEA",
                offset: "77.402%",
              },
              {
                color: "#DFDFDF",
                offset: "100%",
              },
            ],
          },
        },
        g: {
          fill: "url(#illustration-01)",
          fillRule: "evenodd",
          circles: [
            {
              cx: "1232",
              cy: "128",
              r: "128",
            },
            {
              cx: "155",
              cy: "443",
              r: "64",
            },
          ],
        },
      },
    },
    {
      type: "Hero content",
      class: "max-w-6xl mx-auto px-4 sm:px-6",
      div: [
        {
          type: "Section header",
          class: "text-center pb-12 md:pb-16",
          h1: {
            text: "Muuda oma ettevõte",
            class:
              "text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4",
            dataAos: "zoom-y-out",
            span: {
              text: "keskkonnateadlikumaks",
              class:
                "bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-lime-400",
            },
          },
          div: {
            class: "max-w-3xl mx-auto",
            p: {
              text: "Integreeri jätkusuutlikkus oma ärimudelisse ja edenda positiivset mõju.",
              class: "text-xl text-gray-600 mb-8",
              dataAos: "zoom-y-out",
              dataAosDelay: "150",
            },
            div: {
              class: "max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center",
              dataAos: "zoom-y-out",
              dataAosDelay: "300",
              div: [
                {
                  a: {
                    text: "Alusta tasuta",
                    class:
                      "btn text-white bg-green-600 hover:bg-green-500 w-full mb-4 sm:w-auto sm:mb-0",
                    href: "/signup",
                  },
                },
                {
                  a: {
                    text: "Uuri lisa",
                    class:
                      "btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4",
                    href: "/questions",
                  },
                },
              ],
            },
          },
        },
      ],
    },
  ],
  ModalVideo: {
    thumb: "VideoThumb",
    thumbWidth: 768,
    thumbHeight: 432,
    thumbAlt: "Modal video thumbnail",
    video: "/videos/video.mp4",
    videoWidth: 1920,
    videoHeight: 1080,
  },
};

export default function Hero() {
  const renderElements = (elements) => {
    return elements.map((element, index) => {
      if (element.type === "Section header") {
        return (
          <div key={index} className={element.class}>
            <h1 className={element.h1.class} data-aos={element.h1.dataAos}>
              {element.h1.text}{" "}
              <span className={element.h1.span.class}>
                {element.h1.span.text}
              </span>
            </h1>
            <div className={element.div.class}>
              <p
                className={element.div.p.class}
                data-aos={element.div.p.dataAos}
                data-aos-delay={element.div.p.dataAosDelay}
              >
                {element.div.p.text}
              </p>
              {renderButtons(element.div.div)}
            </div>
          </div>
        );
      } else if (element.type === "Hero content") {
        return (
          <div key={index} className={element.class}>
            {renderElements(element.div)}
          </div>
        );
      }
      // Add more conditionals for other types if needed
    });
  };

  const renderButtons = (buttonsContainer) => {
    return (
      <div
        className={buttonsContainer.class}
        data-aos={buttonsContainer.dataAos}
        data-aos-delay={buttonsContainer.dataAosDelay}
      >
        {buttonsContainer.div.map((buttonElement, index) => (
          <div key={index}>
            <a className={buttonElement.a.class} href={buttonElement.a.href}>
              {buttonElement.a.text}
            </a>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className={templateJson.sectionClass}>
      {/* Illustration behind hero content */}
      <div
        className={templateJson.divClass[0].class}
        aria-hidden={templateJson.divClass[0].ariaHidden}
      >
        {/* SVG and other static elements can be rendered directly or further broken down into components */}
      </div>

      <div className={templateJson.divClass[1].class}>
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          {renderElements(templateJson.divClass[1].div)}
        </div>
      </div>

      {/* Hero image */}
      <ModalVideo
        thumb={VideoThumb}
        thumbWidth={templateJson.ModalVideo.thumbWidth}
        thumbHeight={templateJson.ModalVideo.thumbHeight}
        thumbAlt={templateJson.ModalVideo.thumbAlt}
        video={templateJson.ModalVideo.video}
        videoWidth={templateJson.ModalVideo.videoWidth}
        videoHeight={templateJson.ModalVideo.videoHeight}
      />
    </section>
  );
}
