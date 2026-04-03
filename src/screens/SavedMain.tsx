// Screen 1: Главная — Сохранёнки
// AI-коллекция наверху + шторка коллекций снизу
 
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
const imgActiveIcon = "https://www.figma.com/api/mcp/asset/52a3752a-504b-42ed-a9b3-d48dbfa2630f";
const imgIconColor = "https://www.figma.com/api/mcp/asset/1d6c1577-84a9-4e77-8a3b-ded9638ca9ab";
const imgIconColor1 = "https://www.figma.com/api/mcp/asset/1d8654d6-2d89-4797-86ca-814b536faa7e";
const imgIconColor2 = "https://www.figma.com/api/mcp/asset/c7df44ef-61f5-4134-a308-49f5a3741666";
 
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
      {/* Back card — rotated -13deg */}
      <div
        className="absolute rounded-[16px] overflow-hidden"
        style={{
          width: 70,
          height: 70,
          top: 8,
          left: 0,
          transform: "rotate(-13.62deg)",
          boxShadow: "0px 3px 12px rgba(0,0,0,0.44)",
        }}
      >
        <img src={img1} alt="" className="w-full h-full object-cover" />
      </div>
      {/* Front card — rotated +17deg */}
      <div
        className="absolute rounded-[16px] overflow-hidden"
        style={{
          width: 70,
          height: 70,
          top: 0,
          left: 38,
          transform: "rotate(17.38deg)",
          boxShadow: "0px 3px 12px rgba(0,0,0,0.44)",
        }}
      >
        <img src={img2} alt="" className="w-full h-full object-cover" />
      </div>
      {/* Count badge */}
      <div
        className="absolute flex items-center justify-center rounded-full bg-white border-2 border-[#0b0a14]"
        style={{ width: 14, height: 14, top: 8, right: 0 }}
      >
        <span style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 8, color: "#444f5f" }}>
          {count}
        </span>
      </div>
      {/* Label */}
      <p
        className="absolute text-center text-white whitespace-nowrap"
        style={{
          fontFamily: "'VK Sans Display', sans-serif",
          fontWeight: 600,
          fontSize: 10,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {name}
      </p>
    </div>
  );
}
 
export default function SavedMain({ onOpenCollections }: SavedMainProps) {
  return (
    <div className="relative overflow-hidden rounded-[30px] bg-black" style={{ width: 277, height: 600 }}>
      {/* Background cover image (AI collection visual) */}
      <div className="absolute inset-0">
        <img src={imgCover} alt="" className="w-full h-full object-cover" />
      </div>
 
      {/* Status bar area */}
      <div className="absolute top-0 left-0 right-0 h-9 z-20" />
 
      {/* Title gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-20 z-10"
        style={{ background: "linear-gradient(to bottom, rgba(11,11,20,0.9) 0%, rgba(11,11,20,0) 100%)" }}
      />
 
      {/* Title */}
      <p
        className="absolute text-white text-center whitespace-nowrap z-20"
        style={{
          fontFamily: "'VK Sans Display', sans-serif",
          fontWeight: 600,
          fontSize: 30,
          top: 38,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Сохранёнки
      </p>
 
      {/* Floating items (rotated cards from AI collection) */}
      <div className="absolute z-10" style={{ top: 55, left: 158, width: 163, height: 162 }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-[34px] overflow-hidden" style={{ width: 118, height: 118, transform: "rotate(31.78deg)" }}>
            <img src={imgRectangle8} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
 
      <div className="absolute z-10" style={{ top: 86, left: -27, width: 119, height: 118 }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-[21px] overflow-hidden" style={{ width: 98, height: 98, transform: "rotate(-13.78deg)" }}>
            <img src={imgRectangle9} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
 
      {/* Post card */}
      <div
        className="absolute z-10 bg-[#151619] border border-white/8 rounded-[18px] overflow-hidden"
        style={{ width: 87, height: 89, top: 204, left: 143, transform: "rotate(11.12deg)" }}
      >
        <div className="absolute inset-0 p-[9px] flex flex-col gap-[14px]">
          <div className="flex flex-col gap-[4px]">
            <div className="flex items-center gap-[3px]">
              <img src={imgEllipse203193342} alt="" className="w-[12px] h-[12px] rounded-full" />
              <p className="text-white text-center overflow-hidden text-ellipsis whitespace-nowrap" style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 7, flex: 1 }}>
                Андрей Фролова
              </p>
            </div>
            <p className="text-white opacity-80 leading-[1.2] overflow-hidden" style={{ fontFamily: "'Onest', sans-serif", fontWeight: 300, fontSize: 5.4, height: 34 }}>
              Одно здание может изменить восприятие города 🏛️✨. Архитектура — это не только про форму, но и про атмосферу места!
            </p>
          </div>
          <p className="text-white opacity-30" style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400, fontSize: 5 }}>
            22 марта
          </p>
        </div>
      </div>
 
      {/* Small rotated photo */}
      <div
        className="absolute z-10 rounded-[16px] overflow-hidden opacity-70"
        style={{ width: 15, height: 15, top: 107, left: 113, transform: "rotate(7.26deg)" }}
      >
        <img src={imgRectangle8} alt="" className="w-full h-full object-cover" />
      </div>
 
      {/* Small photo 2 */}
      <div
        className="absolute z-10 rounded-[10px] overflow-hidden"
        style={{ width: 33, height: 33, top: 153, left: 121, transform: "rotate(-9.2deg)" }}
      >
        <img src={imgRectangle9} alt="" className="w-full h-full object-cover" />
      </div>
 
      {/* Small photo 3 */}
      <div
        className="absolute z-10 rounded-[16px] overflow-hidden"
        style={{ width: 51, height: 51, top: 206, left: 50, transform: "rotate(-41.6deg)" }}
      >
        <img src={imgRectangle8} alt="" className="w-full h-full object-cover" />
      </div>
 
      {/* AI Collection label block */}
      <div
        className="absolute z-20 flex flex-col items-center gap-[9px]"
        style={{ top: 310, left: "50%", transform: "translateX(-50%)", width: 124 }}
      >
        <div className="flex flex-col items-center gap-[6px]">
          <p
            className="text-white text-center leading-none"
            style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 18 }}
          >
            Архитектура
          </p>
          <p
            className="text-white text-center opacity-40"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400, fontSize: 10.5, lineHeight: 1.1 }}
          >
            Коллекция по вашим сохранёнкам
          </p>
        </div>
        {/* Dot indicators */}
        <div className="flex items-center gap-[4.5px]">
          <div className="rounded-full bg-white" style={{ width: 7, height: 7 }} />
          <div className="rounded-full bg-white/30" style={{ width: 4.5, height: 4.5 }} />
          <div className="rounded-full bg-white/30" style={{ width: 4.5, height: 4.5 }} />
        </div>
      </div>
 
      {/* Bottom sheet — коллекции */}
      <div
        className="absolute bottom-0 left-0 right-0 rounded-tl-[22px] rounded-tr-[22px] z-30"
        style={{
          height: 205,
          background: "rgba(15,16,20,0.96)",
          backdropFilter: "blur(6px)",
        }}
        onClick={onOpenCollections}
      >
        {/* Segment control */}
        <div className="absolute top-[19px] left-[22px] flex items-center gap-[12px]">
          <div className="flex items-center gap-[4px]">
            <span className="text-white" style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 15 }}>
              Мои
            </span>
            <span style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 15, color: "#8e7cf3" }}>
              9
            </span>
          </div>
          <span className="text-white/30" style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 15 }}>
            Общие
          </span>
          <span className="text-white/30" style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 15 }}>
            Рекомендации
          </span>
        </div>
 
        {/* Collection grid (2 columns, scrollable) */}
        <div className="absolute top-[46px] left-0 right-0 overflow-hidden" style={{ height: 132 }}>
          <div className="flex flex-col gap-[15px] px-[11px]">
            <div className="flex gap-[7px]">
              {collections.slice(0, 2).map((c) => (
                <CollectionCard key={c.name} {...c} />
              ))}
            </div>
            <div className="flex gap-[7px]">
              {collections.slice(2, 4).map((c) => (
                <CollectionCard key={c.name} {...c} />
              ))}
            </div>
          </div>
        </div>
 
        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-[37px] left-0 right-0"
          style={{
            height: 50,
            background: "linear-gradient(to top, rgba(11,12,14,0.9) 0%, rgba(11,12,14,0) 100%)",
          }}
        />
 
        {/* Tab bar */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center" style={{ height: 37 }}>
          {/* Active: Saved */}
          <div className="flex-1 flex justify-center">
            <img src={imgActiveIcon} alt="Сохранёнки" style={{ width: 22, height: 22 }} />
          </div>
          {/* Messages */}
          <div className="flex justify-center opacity-30" style={{ width: 69 }}>
            <img src={imgIconColor} alt="" style={{ width: 22, height: 22 }} />
          </div>
          {/* Friends */}
          <div className="flex justify-center opacity-30" style={{ width: 69 }}>
            <img src={imgIconColor1} alt="" style={{ width: 22, height: 22 }} />
          </div>
          {/* Menu */}
          <div className="flex justify-center opacity-30" style={{ width: 69 }}>
            <img src={imgIconColor2} alt="" style={{ width: 22, height: 22 }} />
          </div>
        </div>
 
        {/* Home indicator */}
        <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 rounded-full bg-white/25" style={{ width: 112, height: 4 }} />
      </div>
    </div>
  );
}
