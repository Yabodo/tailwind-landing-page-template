"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import EnvironmentElement from "@/public/images/environment.webp";
import SocialElement from "@/public/images/social.webp";
import GovernanceElement from "@/public/images/governance.webp";

const templateJson = {
  sectionClass: "relative",
  background: [
    {
      type: "Section background",
      class: "absolute inset-0 bg-gray-100 pointer-events-none mb-16",
      ariaHidden: "true",
    },
    {
      type: "Vertical line",
      class:
        "absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2",
    },
  ],
  container: {
    class: "relative max-w-6xl mx-auto px-4 sm:px-6",
    content: [
      {
        type: "Section header",
        class: "max-w-3xl mx-auto text-center pb-12 md:pb-16",
        elements: [
          {
            element: "h1",
            class: "h2 mb-4",
            text: "Jätkusuutlikkus on äri edendamiseks hädavajalik.",
          },
          {
            element: "p",
            class: "text-xl text-gray-600",
            text: "Kuidas saavad ettevõtted kasutada ESG põhimõtteid, et luua väärtust ja saavutada edu? Uurige, kuidas ESG põhimõtted võivad aidata teil oma ettevõtet tulevikku viia.",
          },
        ],
      },
      {
        type: "Section content",
        class: "md:grid md:grid-cols-12 md:gap-6",
        content: [
          {
            type: "Content",
            class:
              "max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6",
            dataAos: "fade-right",
            elements: [
              {
                element: "div",
                class: "md:pr-4 lg:pr-12 xl:pr-16 mb-8",
                content: [
                  {
                    element: "h3",
                    class: "h3 mb-3",
                    text: "Äri Transformeerimine ESG-ga",
                  },
                  {
                    element: "p",
                    class: "text-xl text-gray-600",
                    text: "Läbipaistvuse ja ettevõtte vastutuse ajastul on ESG põhimõtted rohkemat kui juhised – need on strateegilised alustalad, mis kujundavad jätkusuutlikke ärimaastikke.",
                  },
                ],
              },
              {
                type: "Tabs buttons",
                class: "mb-8 md:mb-0",
                tabs: [
                  {
                    id: 1,
                    title: "Keskkonnakaitse",
                    description:
                      "Uuri, kuidas jätkusuutlikud praktikad ja keskkonnakaitse on strateegilised sammud, mis suurendavad brändi väärtust ja operatiivset tõhusust, mitte ainult eetilised valikud.",
                  },
                  {
                    id: 2,
                    title: "Sotsiaalne vastutus",
                    description:
                      "Saage teada, kuidas mitmekesisuse, võrdsuse ja kaasatuse edendamine ning töötajate heaolu prioriseerimine võivad katalüüsida innovatsiooni ja luua tähendusrikka sotsiaalse mõju.",
                  },
                  {
                    id: 3,
                    title: "Juhtimine ja eetika",
                    description:
                      "Mõistke juhtimise ja eetika olulisust usalduse kindlustamisel, vastavuse tagamisel ning pikaajalise äriedu aluse loomisel.",
                  },
                ],
              },
            ],
          },
          {
            type: "Tabs items",
            class:
              "max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1",
            tabsContent: [
              {
                id: 1,
                elementImageSrc: EnvironmentElement,
                style: { top: "30%" },
              },
              {
                id: 2,
                elementImageSrc: SocialElement,
                style: { top: "30%" },
              },
              {
                id: 3,
                elementImageSrc: GovernanceElement,
                style: { top: "30%" },
              },
            ],
          },
        ],
      },
    ],
  },
};

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className={templateJson.sectionClass}>
      {/* Section background */}
      {templateJson.background.map((bg, index) => (
        <div
          key={index}
          className={bg.class}
          aria-hidden={bg.ariaHidden ? "true" : "false"}
        ></div>
      ))}

      <div className={templateJson.container.class}>
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className={templateJson.container.content[0].class}>
            {templateJson.container.content[0].elements.map((element, index) =>
              element.element === "h1" ? (
                <h1 key={index} className={element.class}>
                  {element.text}
                </h1>
              ) : (
                <p key={index} className={element.class}>
                  {element.text}
                </p>
              )
            )}
          </div>

          {/* Section content */}
          <div className={templateJson.container.content[1].class}>
            {/* Content */}
            <div
              className={templateJson.container.content[1].content[0].class}
              data-aos="fade-right"
            >
              <div
                className={
                  templateJson.container.content[1].content[0].elements[0].class
                }
              >
                <h3
                  className={
                    templateJson.container.content[1].content[0].elements[0]
                      .content[0].class
                  }
                >
                  {
                    templateJson.container.content[1].content[0].elements[0]
                      .content[0].text
                  }
                </h3>
                <p
                  className={
                    templateJson.container.content[1].content[0].elements[0]
                      .content[1].class
                  }
                >
                  {
                    templateJson.container.content[1].content[0].elements[0]
                      .content[1].text
                  }
                </p>
              </div>
              {/* Tabs buttons */}
              <div
                className={
                  templateJson.container.content[1].content[0].elements[1].class
                }
              >
                {templateJson.container.content[1].content[0].elements[1].tabs.map(
                  (tabData, index) => (
                    <a
                      key={index}
                      className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                        tab !== tabData.id
                          ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                          : "bg-gray-200 border-transparent"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(tabData.id);
                      }}
                    >
                      <div>
                        <div className="font-bold leading-snug tracking-tight mb-1">
                          {tabData.title}
                        </div>
                        <div className="text-gray-600">
                          {tabData.description}
                        </div>
                      </div>
                      {/* Replace with appropriate SVG or other elements */}
                      <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <svg
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                        </svg>
                      </div>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Render Tabs Items */}
            <div className={templateJson.container.content[1].content[1].class}>
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  {/* Dynamically render tabs based on templateJson */}
                  {templateJson.container.content[1].content[1].tabsContent.map(
                    (tabContent, index) => (
                      <Transition
                        key={index}
                        show={tab === tabContent.id}
                        appear={true}
                        className="w-full"
                        enter="transition ease-in-out duration-700 transform order-first"
                        enterFrom="opacity-0 translate-y-16"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in-out duration-300 transform absolute"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-16"
                        beforeEnter={() => heightFix()}
                        unmount={false}
                      >
                        <div className="relative inline-flex flex-col">
                          <Image
                            className="md:max-w-none mx-auto rounded"
                            src={tabContent.elementImageSrc}
                            width={500}
                            height="462"
                            alt="Features bg"
                            style={tabContent.style}
                          />
                        </div>
                      </Transition>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
