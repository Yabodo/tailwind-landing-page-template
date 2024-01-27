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
            title:
              "Kuidas saab keskkonnaalane vastutustundlikkus tõsta brändi väärtust?",
            description:
              "Uurige, kuidas aktiivsed keskkonnapraktikad saavad tõsta teie brändi mainet ja klientide lojaalsust.",
            iconPath: "/images/env-2.webp",
          },
          {
            id: 3,
            title:
              "Millised strateegiad tagavad jätkusuutlikkuse kaudu operatiivse efektiivsuse?",
            description:
              "Õppige meetodeid ja strateegiaid, mis võivad viia nii suurenenud operatiivse efektiivsuse kui ka vähenenud keskkonnamõjuni.",
            iconPath: "/images/env-3.webp",
          },
          {
            id: 4,
            title:
              "Kuidas mõjutab rohetehnoloogiasse investeerimine ettevõtte kasvu?",
            description:
              "Avastage rohetehnoloogiasse investeerimise eeliseid ja nende rolli innovaatilise kasvu ja konkurentsieelise tagamisel.",
            iconPath: "/images/env-4.webp",
          },
          {
            id: 5,
            title:
              "Millised on riskid, kui ettevõte ei pööra tähelepanu keskkonnaalasele vastutustundlikkusele?",
            description:
              "Mõistke potentsiaalseid riske ja pikaajalisi tagajärgi, millega võib ettevõte silmitsi seista, kui ta ei võta omaks keskkonnasõbralikke praktikaid.",
            iconPath: "/images/env-5.webp",
          },
          {
            id: 6,
            title: "Kuidas saab ettevõte mõõta oma keskkonnaalgatuste mõju?",
            description:
              "Süvenege mõõdikutesse ja tööriistadesse, mis aitavad teil jälgida, mõõta ja kommunikeerida oma jätkusuutlikkuse püüdluste tõhusust.",
            iconPath: "/images/env-6.webp",
          },
          {
            id: 7,
            title:
              "Milline roll on töötajatel ettevõtte keskkonnaalases vastutustundlikkuses?",
            description:
              "Avastage keskkonnateadliku kultuuri edendamise tähtsust ja kuidas töötajate kaasamine võib edendada jätkusuutlikkust.",
            iconPath: "/images/env-7.webp",
          },
          {
            id: 8,
            title:
              "Kuidas saab ettevõte tõhusalt suhelda oma jätkusuutlikkuse püüdlustest huvirühmadega?",
            description:
              "Õppige strateegiaid jätkusuutlikkuse püüdluste ja saavutuste läbipaistvaks ja tõhusaks suhtlemiseks huvirühmadele ja avalikkusele.",
            iconPath: "/images/env-8.webp",
          },
          {
            id: 9,
            title:
              "Millised on valdkonna keskkonnaalase jätkusuutlikkuse tärkavad trendid?",
            description:
              "Püsige sammu ees, uurides tärkavaid trende ja uuenduslikke praktikaid keskkonnaalases jätkusuutlikkuses.",
            iconPath: "/images/env-9.webp",
          },
          {
            id: 10,
            title:
              "Kuidas mõjutavad regulatsioonid ja poliitikad ettevõtte keskkonnastrateegiaid?",
            description:
              "Mõistke valitsuse poliitikate ja regulatsioonide rolli ettevõtte strateegiate kujundamisel keskkonnaalase vastutustundlikkuse suunas.",
            iconPath: "/images/env-10.webp",
          },
          // ... Add more items as needed
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
