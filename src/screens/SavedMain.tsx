// Screen 1: Главная — Сохранёнки

const imgCover = "https://www.figma.com/api/mcp/asset/32011534-4560-4b4c-9817-10631fba8407";
const imgRectangle5 = "https://www.figma.com/api/mcp/asset/7630e131-a94e-4f14-8ea9-dc8cf8100131";
const imgRectangle4 = "https://www.figma.com/api/mcp/asset/e62d6d49-e525-43a9-9f26-d39e093518be";
const imgRectangle6 = "https://www.figma.com/api/mcp/asset/e027968f-4ef8-47e6-95f9-095be5fda2b7";
const imgRectangle7 = "https://www.figma.com/api/mcp/asset/35b274fc-5e54-4498-9168-70df59da2d84";
const imgRectangle8 = "https://www.figma.com/api/mcp/asset/98c8be20-01e9-488e-95a0-5249ddb0274e";
const imgRectangle9 = "https://www.figma.com/api/mcp/asset/6d7a06d9-ce72-4596-bb46-7e78a3c44974";
const imgRectangle10 = "https://www.figma.com/api/mcp/asset/c9bae07c-46fb-412b-b4a7-8a1b8280d9e2";
const imgRectangle11 = "https://www.figma.com/api/mcp/asset/2d06b704-3f40-4c55-9a1b-71a2746b80a8";
const imgRectangle12 = "https://www.figma.com/api/mcp/asset/4fea4fe9-4088-43c8-9367-b05b4cadd8b5";
const imgRectangle13 = "https://www.figma.com/api/mcp/asset/4a326ec8-1c01-4259-84b7-3c4c442ee62f";
const imgRectangle14 = "https://www.figma.com/api/mcp/asset/80a4dca5-860e-4f29-8f5a-28a6e47d0bf3";
const imgRectangle15 = "https://www.figma.com/api/mcp/asset/fb76499b-90b9-4fe2-9d93-06a9815ad409";
const imgRectangle16 = "https://www.figma.com/api/mcp/asset/77fc1859-5433-42c1-a440-43e846150868";
const imgRectangle17 = "https://www.figma.com/api/mcp/asset/fd07b486-8a51-4724-9136-77dad550f867";
const imgRectangle18 = "https://www.figma.com/api/mcp/asset/492c308f-4d73-491a-96d6-d5ced94c6f61";
const imgRectangle19 = "https://www.figma.com/api/mcp/asset/04c94fe6-c145-4745-bb9c-e7f578f5cf17";
const imgEllipse203193342 = "https://www.figma.com/api/mcp/asset/7a2dfc45-7c87-4859-b0af-636c2cd4f43b";

// Фоновые слои
const imgOrbits = "https://www.figma.com/api/mcp/asset/c9e0d2b2-9dca-442d-9226-5314ad9040d8";
const imgGlowBlue = "https://www.figma.com/api/mcp/asset/0a2f097c-0af5-48fb-9658-a6282cdb08fb";
const imgGlowLight = "https://www.figma.com/api/mcp/asset/b68a8bde-2bf9-42b2-92d7-2ae3612f71a6";

// Декоративные фото
const imgDecorSmall = "https://www.figma.com/api/mcp/asset/17704dac-99d5-4886-8cab-318b63375dae";   // rotate(-9.2deg) 33px
const imgDecorMedium = "https://www.figma.com/api/mcp/asset/01d13eb7-6b14-47f4-976d-d7e6b11bd208";  // rotate(-41.6deg) 51px
const imgDecorTiny1 = "https://www.figma.com/api/mcp/asset/8edfe5c2-110f-46dc-bac7-f370f7c45483";   // rotate(7.26deg) 15px layer 1
const imgDecorTiny2 = "https://www.figma.com/api/mcp/asset/0489e079-e418-44de-9e42-bc2cb8b252fb";   // layer 2
const imgDecorTiny3 = "https://www.figma.com/api/mcp/asset/20247968-b3be-475a-aa41-39668171cf02";   // layer 3

interface SavedMainProps {
  onOpenCollections: () => void;
}

const collections = [
  { name: "Фильмы", count: 23, img1: imgRectangle5, img2: imgRectangle4 },
  { name: "Дизайн", count: 8, img1: imgRectangle6, img2: imgRectangle7 },
  { name: "Архитектура", count: 21, img1: imgRectangle8, img2: imgRectangle9 },
  { name: "На выхи", count: 4, img1: imgRectangle10, img2: imgRectangle11 },
  { name: "Свадьба", count: 8, img1: imgRectangle12, img2: imgRectangle13 },
  { name: "Отпуск", count: 9, img1: imgRectangle14, img2: imgRectangle15 },
  { name: "Научпоп", count: 13, img1: imgRectangle16, img2: imgRectangle17 },
  { name: "Постеры", count: 3, img1: imgRectangle18, img2: imgRectangle19 },
];

function CollectionCard({ name, count, img1, img2 }: { name: string; count: number; img1: string; img2: string }) {
  return (
    <div className="relative" style={{ width: 125, height: 106 }}>
      <div
        className="absolute rounded-[16px] overflow-hidden"
        style={{ width: 70, height: 70, top: 8, left: 0, transform: "rotate(-13.62deg)", boxShadow: "0px 3px 12px rgba(0,0,0,0.44)" }}
      >
        <img src={img1} alt="" className="w-full h-full object-cover" />
      </div>
      <div
        className="absolute rounded-[16px] overflow-hidden"
        style={{ width: 70, height: 70, top: 0, left: 38, transform: "rotate(17.38deg)", boxShadow: "0px 3px 12px rgba(0,0,0,0.44)" }}
      >
        <img src={img2} alt="" className="w-full h-full object-cover" />
      </div>
      {/* Каунтер — позиция по Figma: left 98px */}
      <div
        className="absolute flex items-center justify-center rounded-full bg-white border-2 border-[#0b0a14]"
        style={{ width: 14, height: 14, top: 8, left: 98 }}
      >
        <span style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 8, color: "#444f5f" }}>
          {count}
        </span>
      </div>
      <p
        className="absolute text-center text-white whitespace-nowrap"
        style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 10, bottom: 0, left: "50%", transform: "translateX(-50%)" }}
      >
        {name}
      </p>
    </div>
  );
}

export default function SavedMain({ onOpenCollections }: SavedMainProps) {
  return (
    <div className="relative overflow-hidden rounded-[30px] bg-black" style={{ width: 277, height: 600 }}>

      {/* 1. Фоновое изображение */}
      <div className="absolute inset-0">
        <img src={imgCover} alt="" className="w-full h-full object-cover" />
      </div>

      {/* 2. Орбиты/линии */}
      <div className="absolute inset-0">
        <img src={imgOrbits} alt="" className="absolute w-full h-full object-cover" />
      </div>

      {/* 3. Синий засвет снизу */}
      <div className="absolute" style={{ top: "-14.56%", right: "-138.35%", bottom: "-15.94%", left: "-128.88%" }}>
        <img src={imgGlowBlue} alt="" className="block w-full h-full" />
      </div>

      {/* 4. Светлый засвет сверху */}
      <div className="absolute" style={{ top: "-303.6%", right: "-7.41%", bottom: "-43.35%", left: "-8.95%" }}>
        <img src={imgGlowLight} alt="" className="block w-full h-full" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-9 z-10" />

      {/* 5. Градиент под заголовком */}
      <div
        className="absolute top-0 left-0 right-0 z-10"
        style={{ height: 55, background: "linear-gradient(to bottom, #0b0b14 0%, rgba(11,11,20,0) 100%)" }}
      />

      {/* Заголовок */}
      <p
        className="absolute text-white text-center whitespace-nowrap z-20"
        style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 30, top: 38, left: "50%", transform: "translateX(-50%)" }}
      >
        Сохранёнки
      </p>

      {/* Большая фото справа */}
      <div className="absolute z-10" style={{ top: 55, left: 158, width: 163, height: 162 }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-[34px] overflow-hidden" style={{ width: 118, height: 118, transform: "rotate(31.78deg)" }}>
            <img src={imgRectangle8} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Большая фото слева */}
      <div className="absolute z-10" style={{ top: 86, left: -27, width: 119, height: 118 }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-[21px] overflow-hidden" style={{ width: 98, height: 98, transform: "rotate(-13.78deg)" }}>
            <img src={imgRectangle9} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Карточка поста — обводка 0.8px, 8% opacity */}
      <div
        className="absolute z-10 bg-[#151619] rounded-[18px] overflow-hidden"
        style={{ width: 87, height: 89, top: 204, left: 143, transform: "rotate(11.12deg)", border: "0.8px solid rgba(255,255,255,0.08)" }}
      >
        <div className="absolute inset-0 p-[9px] flex flex-col gap-[14px]">
          <div className="flex flex-col gap-[4px]">
            <div className="flex items-center gap-[3px]">
              <img src={imgEllipse203193342} alt="" className="w-[12px] h-[12px] rounded-full" />
              <p className="text-white text-center overflow-hidden text-ellipsis whitespace-nowrap" style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 7, flex: 1 }}>
                Андрей Фролова
              </p>
            </div>
            <p className="text-white opacity-80 leading-[1.2] overflow-hidden" style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400, fontSize: 5.4, height: 34 }}>
              Одно здание может изменить восприятие города 🏛️✨. Архитектура — это не только про форму, но и про атмосферу места!
            </p>
          </div>
          <p className="text-white opacity-30" style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400, fontSize: 5 }}>
            22 марта
          </p>
        </div>
      </div>

      {/* Декоративное фото — rotate(7.26deg), три слоя */}
      <div className="absolute z-10" style={{ width: 15, height: 15, top: 107, left: 113, transform: "rotate(7.26deg)" }}>
        <div className="relative w-full h-full rounded-[4px] overflow-hidden opacity-70">
          <img src={imgDecorTiny1} alt="" className="absolute w-full h-full object-cover rounded-[4px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[4px]">
            <img src={imgDecorTiny2} alt="" className="absolute max-w-none" style={{ height: "153.21%", left: 0, top: "-48.78%", width: "140.73%" }} />
          </div>
          <img src={imgDecorTiny3} alt="" className="absolute w-full h-full object-cover rounded-[4px]" />
        </div>
      </div>

      {/* Декоративное фото — rotate(-9.2deg) 33px */}
      <div className="absolute z-10" style={{ width: 33, height: 33, top: 153, left: 121, transform: "rotate(-9.2deg)" }}>
        <div className="relative w-full h-full rounded-[10px] overflow-hidden">
          <img src={imgDecorSmall} alt="" className="absolute w-full h-full object-cover" />
        </div>
      </div>

      {/* Декоративное фото — rotate(-41.6deg) 51px */}
      <div className="absolute z-10" style={{ width: 51, height: 51, top: 206, left: 50, transform: "rotate(-41.6deg)" }}>
        <div className="relative w-full h-full rounded-[15.5px] overflow-hidden">
          <img src={imgDecorMedium} alt="" className="absolute max-w-none" style={{ height: "124.77%", left: "-61.48%", top: "-24.77%", width: "186.03%" }} />
        </div>
      </div>

      {/* Лейбл AI-коллекции */}
      <div
        className="absolute z-20 flex flex-col items-center gap-[9px]"
        style={{ top: 310, left: "50%", transform: "translateX(-50%)", width: 124 }}
      >
        <div className="flex flex-col items-center gap-[6px]">
          <p className="text-white text-center leading-none" style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 18 }}>
            Архитектура
          </p>
          <p className="text-white text-center opacity-40" style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400, fontSize: 10.5, lineHeight: 1.1 }}>
            Коллекция по вашим сохранёнкам
          </p>
        </div>
        {/* Три точки — все одинакового размера 4.5px */}
        <div className="flex items-center gap-[4.5px]">
          <div className="rounded-full bg-white" style={{ width: 4.5, height: 4.5 }} />
          <div className="rounded-full bg-white mix-blend-plus-lighter opacity-30" style={{ width: 4.5, height: 4.5 }} />
          <div className="rounded-full bg-white mix-blend-plus-lighter opacity-30" style={{ width: 4.5, height: 4.5 }} />
        </div>
      </div>

      {/* Bottom sheet */}
      <div
        className="absolute bottom-0 left-0 right-0 rounded-tl-[22px] rounded-tr-[22px] z-30"
        style={{ height: 205, background: "rgba(15,16,20,0.96)", backdropFilter: "blur(6px)" }}
        onClick={onOpenCollections}
      >
        <div className="absolute top-[19px] left-[22px] flex items-center gap-[12px]">
          <div className="flex items-center gap-[4px]">
            <span className="text-white" style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 15 }}>Мои</span>
            <span style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 15, color: "#8e7cf3" }}>9</span>
          </div>
          <span className="text-white/30 mix-blend-plus-lighter" style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 15 }}>Общие</span>
          <span className="text-white/30 mix-blend-plus-lighter" style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 15 }}>Рекомендации</span>
        </div>

        <div className="absolute top-[46px] left-0 right-0 overflow-hidden" style={{ height: 132 }}>
          <div className="flex flex-col gap-[15px] px-[11px]">
            <div className="flex gap-[7px]">
              {collections.slice(0, 2).map((c) => <CollectionCard key={c.name} {...c} />)}
            </div>
            <div className="flex gap-[7px]">
              {collections.slice(2, 4).map((c) => <CollectionCard key={c.name} {...c} />)}
            </div>
          </div>
        </div>

        {/* Tab bar — градиент + progressive blur */}
        <div className="absolute bottom-0 left-0 right-0">
          {/* Фоновый градиент */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(179.918deg, rgba(34,35,40,0) 3.211%, rgba(11,12,14,0.9) 68.505%, rgb(11,12,14) 99.862%)",
          }} />
          {/* Progressive blur: нарастает снизу */}
          <div className="absolute inset-0" style={{
            backdropFilter: "blur(31.06px)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
            maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          }} />
          <div className="relative flex items-center" style={{ height: 37 }}>
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
          <div className="relative" style={{ height: 27 }}>
            <div className="absolute left-1/2 -translate-x-1/2 rounded-full bg-white/25" style={{ width: 112, height: 4, bottom: 6 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
