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
const imgActiveIcon = "https://www.figma.com/api/mcp/asset/61c999e4-14e9-452e-a40c-e5275798c396";
const imgIconColor1 = "https://www.figma.com/api/mcp/asset/7187c896-ad46-4b53-bbf3-03d63b46b04a";
const imgIconColor2 = "https://www.figma.com/api/mcp/asset/ca0f2092-f2d0-4b9d-a815-89aa3598f6bf";
const imgIconColor3 = "https://www.figma.com/api/mcp/asset/4b1206aa-a6e3-4380-9d9e-16f085d1352e";
const imgBackIcon = "https://www.figma.com/api/mcp/asset/f1a469f3-48a5-4148-9421-d57eba3fb6df";
const imgMoreVertical = "https://www.figma.com/api/mcp/asset/6a78da3a-4f63-4854-b1be-abb52174d637";
 
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
 
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 h-9 z-20" />
 
      {/* Sticky header */}
      <div className="absolute top-0 left-0 right-0 z-30">
        {/* Header row */}
        <div className="flex items-center justify-between" style={{ paddingTop: 36, paddingLeft: 12, paddingRight: 12 }}>
          <div className="flex items-center gap-[7px]">
            <button onClick={onBack} className="flex items-center justify-center" style={{ width: 30, height: 30 }}>
              <img src={imgBackIcon} alt="назад" style={{ width: 13, height: 18 }} />
            </button>
            {/* Title + shared avatars */}
            <div className="flex items-center gap-[7px]">
              <p
                className="text-white leading-none"
                style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 21 }}
              >
                Архитектура
              </p>
              {/* Shared indicator — overlapping avatars */}
              <div className="relative flex items-center" style={{ width: 39, height: 22 }}>
                <img
                  src={imgEllipse203193344}
                  alt=""
                  className="absolute rounded-full object-cover"
                  style={{ width: 21, height: 21, left: 0, top: 0.5 }}
                />
                <img
                  src={imgExclude}
                  alt=""
                  className="absolute"
                  style={{ width: 40, height: 23, left: -1.5, top: 0 }}
                />
              </div>
            </div>
          </div>
          <button className="flex items-center justify-center" style={{ width: 18, height: 18 }}>
            <img src={imgMoreVertical} alt="ещё" style={{ width: 18, height: 18 }} />
          </button>
        </div>
 
        {/* Tab bar / filter */}
        <div className="flex items-center gap-[9px] overflow-hidden" style={{ paddingLeft: 13, paddingTop: 10, paddingBottom: 4 }}>
          {TABS.map((tab, i) => (
            <div key={tab} className="flex items-center gap-[3px] shrink-0">
              <span
                style={{
                  fontFamily: "'VK Sans Display', sans-serif",
                  fontWeight: 600,
                  fontSize: i === 0 ? 15 : 15,
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
      <div
        className="absolute z-10 overflow-y-auto"
        style={{ top: 105, left: 0, right: 0, bottom: 64 }}
      >
        <div className="flex gap-[12px] px-[12px] pb-[20px]">
          {/* Left column */}
          <div className="flex flex-col gap-[12px]" style={{ width: 123 }}>
            {/* Photo card with post overlay */}
            <div className="relative rounded-[15px] overflow-hidden" style={{ height: 152 }}>
              <img src={imgFrame2147223668} alt="" className="absolute w-full h-full object-cover" style={{ top: "0%", left: "0%" }} />
              <img src={imgFrame2147223669} alt="" className="absolute inset-0 w-full h-full object-cover" />
              {/* gradient */}
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{ height: 71, background: "linear-gradient(to top, rgba(0,0,0,0.8) 74%, rgba(0,0,0,0) 100%)" }}
              />
              {/* Author & text */}
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
            {/* Caption */}
            <p className="text-white/50" style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400, fontSize: 10.5 }}>
              Конструкция крыши
            </p>
 
            {/* Podcast card */}
            <div
              className="relative rounded-[15px] flex flex-col justify-between"
              style={{ height: 82, background: "rgba(255,255,255,0.08)", padding: "10px" }}
            >
              <p className="text-white overflow-hidden leading-[1.2]" style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400, fontSize: 9.5, height: 41 }}>
                Конструктив № 12 — Пост- и метамодерн: как менялась архитектура
              </p>
              <div className="flex items-center justify-between">
                <p className="text-white/50 leading-[1.16]" style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400, fontSize: 9 }}>
                  Constructive • 326
                </p>
                <div style={{ width: 12, height: 12 }}>
                  🎧
                </div>
              </div>
            </div>
 
            {/* Photo */}
            <div className="rounded-[15px] overflow-hidden" style={{ height: 186 }}>
              <img src={imgFrame2147223671} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
 
          {/* Right column */}
          <div className="flex flex-col gap-[12px]" style={{ width: 123 }}>
            {/* Post text card */}
            <div
              className="relative rounded-[15px]"
              style={{ height: 124, background: "rgba(255,255,255,0.08)", padding: "10px" }}
            >
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
 
            {/* Video clip card */}
            <div className="flex flex-col gap-[6px]">
              <div className="relative rounded-[15px] overflow-hidden" style={{ height: 186 }}>
                <img src={imgFrame2147223670} alt="" className="w-full h-full object-cover" />
                {/* Play button */}
                <div
                  className="absolute flex items-center justify-center rounded-full"
                  style={{
                    width: 18,
                    height: 18,
                    top: 9,
                    right: 9,
                    background: "rgba(255,255,255,0.3)",
                  }}
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
 
            {/* Photo */}
            <div className="rounded-[15px] overflow-hidden" style={{ height: 152 }}>
              <img src={imgFrame2147223668} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
 
      {/* Bottom gradient */}
      <div
        className="absolute z-20 bottom-[64px] left-0 right-0"
        style={{
          height: 60,
          background: "linear-gradient(to top, rgba(11,12,14,0.9) 0%, rgba(11,12,14,0) 100%)",
          pointerEvents: "none",
        }}
      />
 
      {/* Tab bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 flex items-center"
        style={{
          height: 64,
          background: "rgba(11,12,14,0.9)",
          backdropFilter: "blur(19px)",
        }}
      >
        <div className="flex-1 flex justify-center">
          <img src={imgActiveIcon} alt="Сохранёнки" style={{ width: 22, height: 22 }} />
        </div>
        <div className="flex justify-center opacity-30" style={{ width: 69 }}>
          <img src={imgIconColor1} alt="" style={{ width: 22, height: 22 }} />
        </div>
        <div className="flex justify-center opacity-30" style={{ width: 69 }}>
          <img src={imgIconColor2} alt="" style={{ width: 22, height: 22 }} />
        </div>
        <div className="flex justify-center opacity-30" style={{ width: 69 }}>
          <img src={imgIconColor3} alt="" style={{ width: 22, height: 22 }} />
        </div>
      </div>
 
      {/* Home indicator */}
      <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 rounded-full bg-white/25 z-30" style={{ width: 112, height: 4 }} />
    </div>
  );
}
