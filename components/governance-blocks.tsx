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
            id: 1,
            title:
              "Miks on hea valitsemistava oluline ettevõtte usaldusväärsuse jaoks?",
            description:
              "Mõistke, kuidas tugev valitsemistava aitab luua usaldust ettevõtte ja selle sidusrühmade vahel ning tagab jätkusuutliku edu.",
            iconPath: "/images/gov-1.webp",
          },
          {
            id: 2,
            title:
              "Kuidas saavad ettevõtted tagada eetiliste põhimõtete järgimist?",
            description:
              "Avastage meetodid ja süsteemid, mida ettevõtted saavad kasutada eetilise käitumise tagamiseks ja juurutamiseks kõigil organisatsiooni tasanditel.",
            iconPath: "/images/gov-2.webp",
          },
          {
            id: 3,
            title: "Milline on läbipaistvuse roll ettevõtte juhtimises?",
            description:
              "Uurige läbipaistvuse tähtsust ettevõtte juhtimises ja kuidas see aitab kaasa vastutustundlikkusele ja usaldusväärsusele.",
            iconPath: "/images/gov-3.webp",
          },
          {
            id: 4,
            title:
              "Kuidas mõjutavad regulatsioonid ettevõtte eetikat ja juhtimist?",
            description:
              "Mõistke regulatsioonide mõju ettevõtte juhtimisstruktuuridele ja eetikapõhimõtetele ning nende rolli vastavuse tagamisel.",
            iconPath: "/images/gov-4.webp",
          },
          {
            id: 5,
            title:
              "Millised on parimad praktikad korruptsiooni ennetamiseks ettevõtetes?",
            description:
              "Tutvuge tõhusate strateegiatega korruptsiooni ennetamiseks ja eetilise käitumise edendamiseks ettevõttes.",
            iconPath: "/images/gov-5.webp",
          },
          {
            id: 6,
            title: "Kuidas juhtkond saab mõjutada ettevõtte eetikat?",
            description:
              "Avastage, kuidas juhtkonna eeskuju ja pühendumus eetikale mõjutavad kogu organisatsiooni väärtusi ja käitumist.",
            iconPath: "/images/gov-6.webp",
          },
          {
            id: 7,
            title: "Milline on riskijuhtimise roll eetilises ettevõttes?",
            description:
              "Uurige riskijuhtimise tähtsust eetilise otsustusprotsessi osana ning selle mõju ettevõtte vastupidavusele ja usaldusväärsusele.",
            iconPath: "/images/gov-7.webp",
          },
          {
            id: 8,
            title: "Kuidas saavad ettevõtted edendada eetilist kultuuri?",
            description:
              "Õppige strateegiaid, mis aitavad luua ja hoida eetilist kultuuri ettevõttes, tagades pühendumuse eetilistele põhimõtetele.",
            iconPath: "/images/gov-8.webp",
          },
          {
            id: 9,
            title: "Kuidas eetika ja jätkusuutlikkus on omavahel seotud?",
            description:
              "Mõistke, kuidas eetilised põhimõtted ja jätkusuutlikkuse eesmärgid üksteist toetavad ja tugevdavad, luues aluse vastutustundlikule äritegevusele.",
            iconPath: "/images/gov-9.webp",
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
