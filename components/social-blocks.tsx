const templateJson = {
  sectionClass: "relative",
  background: [
    {
      type: "Section background",
      class:
        "absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none",
      ariaHidden: "true",
    },
    {
      type: "Vertical line",
      class:
        "absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2",
    },
  ],
  container: {
    class: "relative max-w-6xl mx-auto px-4 sm:px-6",
    content: [
      {
        type: "Section header",
        class: "max-w-3xl mx-auto text-center pb-12 md:pb-20",
        elements: [
          {
            element: "h2",
            class: "h2 mb-4",
            text: "Environmental Stewardship",
          },
          {
            element: "p",
            class: "text-xl text-gray-600",
            text: "Discover how sustainable practices and environmental stewardship are not just ethical choices but strategic moves that enhance brand value and operational efficiency.",
          },
        ],
      },
      {
        type: "Items",
        class:
          "max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none",
        items: [
          {
            id: 2,
            title: "Kuidas mõõta töötajate heaolu mõju ettevõtte tulemustele?",
            description:
              "Avastage töötajate heaolu mõõtmise meetodid ja selle seoseid ettevõtte üldise jõudlusega.",
            iconPath: "/images/soc-1.webp",
          },
          {
            id: 3,
            title:
              "Millised on parimad praktikad töövõrdõiguslikkuse edendamiseks?",
            description:
              "Uurige tõhusaid strateegiaid ja meetmeid, mis aitavad luua võrdseid võimalusi kõikidele töötajatele.",
            iconPath: "/images/soc-2.webp",
          },
          {
            id: 4,
            title:
              "Kuidas saavad ettevõtted toetada kogukondade jätkusuutlikkust?",
            description:
              "Õppige, kuidas ettevõtted saavad oma tegevuse kaudu panustada kohalike kogukondade heaolusse ja arengusse.",
            iconPath: "/images/soc-3.webp",
          },
          {
            id: 5,
            title:
              "Mis on töötajate kaasamise roll sotsiaalse vastutustundlikkuse edendamisel?",
            description:
              "Avastage, kuidas töötajate kaasamine võib edendada sotsiaalse vastutustundlikkuse kultuuri ja praktikaid ettevõttes.",
            iconPath: "/images/soc-4.webp",
          },
          {
            id: 6,
            title:
              "Kuidas saavad ettevõtted vähendada töökoha diskrimineerimist?",
            description:
              "Uurige strateegiaid ja meetmeid, mida ettevõtted saavad rakendada, et luua kaasavam ja diskrimineerimisvaba töökeskkond.",
            iconPath: "/images/soc-5.webp",
          },
          {
            id: 7,
            title:
              "Milline on juhtkonna roll ettevõtte sotsiaalses vastutuses?",
            description:
              "Mõistke, kuidas juhtkonna eeskuju ja pühendumus mõjutavad ettevõtte sotsiaalse vastutuse poliitikat ja praktikat.",
            iconPath: "/images/soc-6.webp",
          },
          {
            id: 8,
            title:
              "Kuidas hinnata ettevõtte sotsiaalse vastutuse programmi mõju?",
            description:
              "Avastage meetodid ja vahendid ettevõtte sotsiaalse vastutuse programmide tulemuste mõõtmiseks ja hindamiseks.",
            iconPath: "/images/soc-7.webp",
          },
          {
            id: 9,
            title:
              "Millised on tulevased trendid ettevõtete sotsiaalses vastutuses?",
            description:
              "Tutvuge uusimate suundumustega ettevõtete sotsiaalses vastutuses, mis kujundavad tuleviku ettevõtlusmaastikku.",
            iconPath: "/images/soc-8.webp",
          },
          {
            id: 10,
            title:
              "Kuidas saavad ettevõtted kaasata huvirühmi oma sotsiaalse vastutuse algatustesse?",
            description:
              "Õppige strateegiaid huvirühmade kaasamiseks ettevõtte sotsiaalse vastutuse algatustesse ja kuidas see võib suurendada läbipaistvust ja usaldust.",
            iconPath: "/images/soc-9.webp",
          },
        ],
      },
    ],
  },
};

export default function FeaturesBlocks() {
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
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className={templateJson.container.content[0].class}>
            {templateJson.container.content[0].elements.map((element, index) =>
              element.element === "h2" ? (
                <h2 key={index} className={element.class}>
                  {element.text}
                </h2>
              ) : (
                <p key={index} className={element.class}>
                  {element.text}
                </p>
              )
            )}
          </div>

          {/* Items */}
          <div className={templateJson.container.content[1].class}>
            {templateJson.container.content[1].items.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl"
              >
                {/* Replace with actual SVG or image component */}
                <img
                  src={item.iconPath}
                  className="w-16 h-16 p-1 -mt-1 mb-2 rounded"
                  alt={`Icon for ${item.title}`}
                />
                <h4 className="text-xl font-bold text-center leading-snug tracking-tight mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
