// Screen 3: Коллекция Архитектура — контент внутри коллекции

const imgFrame2147223668 = "https://www.figma.com/api/mcp/asset/61107d5c-cb3a-4963-abc8-6bb4cb784f37";
const imgFrame2147223669 = "https://www.figma.com/api/mcp/asset/d450d41d-3be4-46c4-b353-9b23ddd25735";
const imgEllipse203193342 = "https://www.figma.com/api/mcp/asset/a70da43e-98e2-44dc-be07-34a518d00efe";
const imgFrame2147223671 = "https://www.figma.com/api/mcp/asset/af98d565-cc5e-47a9-b08d-7b54a57bdcec";
const imgEllipse203193343 = "https://www.figma.com/api/mcp/asset/ff5df12c-d8c7-45ee-be1c-15c98e34701d";
const imgFrame2147223670 = "https://www.figma.com/api/mcp/asset/c19b6a5b-a947-41a9-8ac2-b6c04f25c180";
const imgEllipse203193344 = "https://www.figma.com/api/mcp/asset/682a52ae-5744-418e-b0f2-affd86d615df";
const imgExclude = "https://www.figma.com/api/mcp/asset/165b4ed6-3e56-4b72-b908-ba6fc3fd5926";
const imgFrame2147223710 = "https://www.figma.com/api/mcp/asset/94edbdf6-e5b9-4323-95fd-c853dee85f4c";
const imgIconColor = "https://www.figma.com/api/mcp/asset/20c7f635-e8e4-4ac5-a3f4-2796e92bf829";

interface CollectionDetailProps {
  onBack: () => void;
}

const TABS = ["Все", "Посты", "Аудио", "Видео", "Люди"];

export default function CollectionDetail({ onBack }: CollectionDetailProps) {
  return (
    <div className="relative overflow-hidden rounded-[30px]" style={{ width: 277, height: 600, background: "#090810" }}>
      {/* Background gradient */}
      <div className="absolute inset-0">
        <img
          src={imgFrame2147223710}
          alt=""
          className="absolute"
          style={{ width: "155%", height: "120%", top: "-20%", left: "-4%", opacity: 0.8 }}
        />
      </div>

      <div className="absolute top-0 left-0 right-0 h-9 z-20" />

      {/* Sticky header */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <div className="flex items-center justify-between" style={{ paddingTop: 36, paddingLeft: 12, paddingRight: 12 }}>
          <div className="flex items-center gap-[7px]">
            <button onClick={onBack} className="flex items-center justify-center" style={{ width: 30, height: 30 }}>
              <img src="/icons/Icon6.svg" alt="назад" style={{ width: 13, height: 18 }} />
            </button>
            <div className="flex items-center gap-[7px]">
              <p
                className="text-white leading-none"
                style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 21 }}
              >
                Архитектура
              </p>
              <div className="relative flex items-center" style={{ width: 39, height: 22 }}>
                <img src={imgEllipse203193344} alt="" className="absolute rounded-full object-cover" style={{ width: 21, height: 21, left: 0, top: 0.5 }} />
                <img src={imgExclude} alt="" className="absolute" style={{ width: 40, height: 23, left: -1.5, top: 0 }} />
              </div>
            </div>
          </div>
          <button className="flex items-center justify-center" style={{ width: 18, height: 18 }}>
            <img src="/icons/icon5.svg" alt="ещё" style={{ width: 18, height: 18 }} />
          </button>
        </div>

        {/* Tab bar / filter */}
        <div className="flex items-center gap-[9px] overflow-hidden" style={{ paddingLeft: 13, paddingTop: 10, paddingBottom: 4 }}>
          {TABS.map((tab, i) => (
            <div key={tab} className="flex items-center gap-[3px] shrink-0">
              <span
                style={{
                  fontFamily: "'VK Sans Display', sans-serif",
                  fontWeight: 600, fontSize: 15,
                  color: i === 0 ? "white" : "rgba(255,255,255,0.3)",
                  lineHeight: 1,
                }}
              >
                {tab}
              </span>
              {i === 0 && (
                <span style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 15, color: "#8e7cf3" }}>
                  {" "}21
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable content — masonry 2 columns */}
      <div className="absolute z-10 overflow-y-auto" style={{ top: 105, left: 0, right: 0, bottom: 64 }}>
        <div className="flex gap-[12px] px-[12px] pb-[20px]">
          {/* Left column */}
          <div className="flex flex-col gap-[12px]" style={{ width: 123 }}>
            <div className="relative rounded-[15px] overflow-hidden" style={{ height: 152 }}>
              <img src={imgFrame2147223668} alt="" className="absolute w-full h-full object-cover" style={{ top: "0%", left: "0%" }} />
              <img src={imgFrame2147223669} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0" style={{ height: 71, background: "linear-gradient(to top, rgba(0,0,0,0.8) 74%, rgba(0,0,0,0) 100%)" }} />
              <div className="absolute bottom-[10px] left-[10px] right-[10px] flex flex-col gap-[4px]">
                <div className="flex items-center gap-[4px]">
                  <img src={imgEllipse203193342} alt="" className="rounded-full" style={{ width: 13, height: 13 }} />
                  <p className="text-white overflow-hidden text-ellipsis whitespace-nowrap" style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 9 }}>
                    Ульяна Юсупова
                  </p>
                </div>
                <p className="text-white overflow-hidden leading-[1.2]" style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400, fontSize: 7.5, height: 27 }}>
                  Красивый пример современной архитектуры: чистые линии, консольные балконы и почти графичная композиция фасада
                </p>
              </div>
            </div>
            <p className="text-white/50" style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400, fontSize: 10.5 }}>
              Конструкция крыши
            </p>
            <div className="relative rounded-[15px] flex flex-col justify-between" style={{ height: 82, background: "rgba(255,255,255,0.08)", padding: "10px" }}>
              <p className="text-white overflow-hidden leading-[1.2]" style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400, fontSize: 9.5, height: 41 }}>
                Конструктив № 12 — Пост- и метамодерн: как менялась архитектура
              </p>
              <div className="flex items-center justify-between">
                <p className="text-white/50 leading-[1.16]" style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400, fontSize: 9 }}>
                  Constructive • 326
                </p>
                <div style={{ width: 12, height: 12 }}>🎧</div>
              </div>
            </div>
            <div className="rounded-[15px] overflow-hidden" style={{ height: 186 }}>
              <img src={imgFrame2147223671} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-[12px]" style={{ width: 123 }}>
            <div className="relative rounded-[15px]" style={{ height: 124, background: "rgba(255,255,255,0.08)", padding: "10px" }}>
              <div className="flex flex-col gap-[6px]">
                <div className="flex items-center gap-[4px]">
                  <img src={imgEllipse203193343} alt="" className="rounded-full" style={{ width: 18, height: 18 }} />
                  <p className="text-white overflow-hidden text-ellipsis whitespace-nowrap" style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 10.5, flex: 1 }}>
                    Андрей Фролова
                  </p>
                </div>
                <p className="text-white overflow-hidden leading-[1.2]" style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400, fontSize: 12, height: 58 }}>
                  Одно здание может изменить восприятие города 🏛️✨. Архитектура — это не только про форму, но и про атмосферу места!
                </p>
              </div>
              <p className="absolute text-white/50" style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400, fontSize: 7.5, bottom: 10, left: 10 }}>
                22 марта • 84
              </p>
            </div>
            <div className="flex flex-col gap-[6px]">
              <div className="relative rounded-[15px] overflow-hidden" style={{ height: 186 }}>
                <img src={imgFrame2147223670} alt="" className="w-full h-full object-cover" />
                <div
                  className="absolute flex items-center justify-center rounded-full"
                  style={{ width: 18, height: 18, top: 9, right: 9, background: "rgba(255,255,255,0.3)" }}
                >
                  <img src={imgIconColor} alt="" style={{ width: 12, height: 12 }} />
                </div>
                <p className="absolute text-white whitespace-nowrap" style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400, fontSize: 7.5, top: 14, left: 10 }}>
                  Arch Inspiration • 24
                </p>
              </div>
              <p className="text-white/50 leading-[1.1] overflow-hidden" style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400, fontSize: 10.5, height: 18 }}>
                Идея приёма с окнами и ритмом фасада, посмотреть не забыть
              </p>
            </div>
            <div className="rounded-[15px] overflow-hidden" style={{ height: 152 }}>
              <img src={imgFrame2147223668} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute z-20 bottom-[64px] left-0 right-0 pointer-events-none"
        style={{ height: 60, background: "linear-gradient(to top, rgba(11,8,16,0.9) 0%, rgba(11,8,16,0) 100%)" }}
      />

      {/* Tab bar — точный градиент и блюр из Figma */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30"
        style={{
          background: "linear-gradient(179.918deg, rgba(34,35,40,0) 3.211%, rgba(11,12,14,0.9) 68.505%, rgb(11,12,14) 99.862%)",
          backdropFilter: "blur(15.531px)",
        }}
      >
        <div className="flex items-center" style={{ height: 37 }}>
          <div className="flex-1 flex justify-center items-center">
            <img src="/icons/Icon1.svg" alt="Сохранёнки" style={{ width: 22, height: 22 }} />
          </div>
          <div className="flex justify-center items-center opacity-30 mix-blend-plus-lighter" style={{ width: 69 }}>
            <img src="/icons/Icon2.svg" alt="" style={{ width: 22, height: 22 }} />
          </div>
          <div className="flex justify-center items-center opacity-30 mix-blend-plus-lighter" style={{ width: 69 }}>
            <img src="/icons/Icon3.svg" alt="" style={{ width: 22, height: 22 }} />
          </div>
          <div className="flex justify-center items-center opacity-30 mix-blend-plus-lighter" style={{ width: 69 }}>
            <img src="/icons/Icon4.svg" alt="" style={{ width: 22, height: 22 }} />
          </div>
        </div>
        <div style={{ height: 27, position: "relative" }}>
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-full bg-white/25"
            style={{ width: 112, height: 4, bottom: 6 }}
          />
        </div>
      </div>
    </div>
  );
}
