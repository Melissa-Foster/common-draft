// Screen 2: Все коллекции (шторка раскрыта)

const imgRectangle5 = "https://www.figma.com/api/mcp/asset/c9eca32d-12f3-445d-8ece-0599b673e70d";
const imgRectangle4 = "https://www.figma.com/api/mcp/asset/acc520b9-f7a2-4e23-9785-5e33c6d5bfa4";
const imgRectangle6 = "https://www.figma.com/api/mcp/asset/573f250a-60a8-4738-824b-5b6052943759";
const imgRectangle7 = "https://www.figma.com/api/mcp/asset/468ee53f-a4b4-4564-90d8-e869dcb63363";
const imgRectangle8 = "https://www.figma.com/api/mcp/asset/868aa8a0-84d5-424e-ad56-e9815bb39bbb";
const imgRectangle9 = "https://www.figma.com/api/mcp/asset/eaa03363-19e4-4d19-b23c-a0e20c29e307";
const imgRectangle10 = "https://www.figma.com/api/mcp/asset/fbd76495-763d-48e4-8b5c-eda6d8d0eb47";
const imgRectangle11 = "https://www.figma.com/api/mcp/asset/3a02afe9-1edd-4310-afb6-7504382c25c8";
const imgRectangle12 = "https://www.figma.com/api/mcp/asset/e7808750-e955-4092-8c51-add5edfa5d18";
const imgRectangle13 = "https://www.figma.com/api/mcp/asset/f8460f31-ef00-40f1-bb46-29f7df293c26";
const imgRectangle14 = "https://www.figma.com/api/mcp/asset/bdcb1a3a-a97c-4f2e-8798-c8ad5544d25e";
const imgRectangle15 = "https://www.figma.com/api/mcp/asset/8a28f5ff-9582-4d37-81cf-a29f5f43b887";
const imgRectangle16 = "https://www.figma.com/api/mcp/asset/e1d97778-bf97-4514-b53a-4835ec06cc48";
const imgRectangle17 = "https://www.figma.com/api/mcp/asset/e849af47-1183-4eb7-aa17-ab63dcf5e4a1";
const imgRectangle18 = "https://www.figma.com/api/mcp/asset/16ae5f91-e84b-4330-917d-ad786021f621";
const imgRectangle19 = "https://www.figma.com/api/mcp/asset/2b57bdb2-e079-4314-a276-be30867965aa";
const imgFrame2147223709 = "https://www.figma.com/api/mcp/asset/d99d79bf-bbe6-484f-bf6d-743710a38866";

interface CollectionsProps {
  onBack: () => void;
  onOpenCollection: () => void;
}

const collections = [
  { name: "Все сохранёнки", count: 23, img1: imgRectangle5, img2: imgRectangle4, borderColor: "#0b0a14" },
  { name: "Дизайн", count: 8, img1: imgRectangle6, img2: imgRectangle7, borderColor: "#2e284d" },
  { name: "Архитектура", count: 21, img1: imgRectangle8, img2: imgRectangle9, borderColor: "#0b0a14" },
  { name: "На выхи", count: 4, img1: imgRectangle10, img2: imgRectangle11, borderColor: "#0b0a14" },
  { name: "Свадьба", count: 23, img1: imgRectangle12, img2: imgRectangle13, borderColor: "#0b0a14" },
  { name: "Отпуск", count: 9, img1: imgRectangle14, img2: imgRectangle15, borderColor: "#0b0a14" },
  { name: "Научпоп", count: 23, img1: imgRectangle16, img2: imgRectangle17, borderColor: "#1d3351" },
  { name: "Постеры", count: 23, img1: imgRectangle18, img2: imgRectangle19, borderColor: "#18273f" },
];

function CollectionCard({
  name, count, img1, img2, borderColor, onClick,
}: {
  name: string; count: number; img1: string; img2: string; borderColor: string; onClick?: () => void;
}) {
  return (
    <div className="relative cursor-pointer" style={{ width: 125, height: 106 }} onClick={onClick}>
      <div
        className="absolute rounded-[16px] overflow-hidden"
        style={{ width: 70, height: 70, top: 8, left: 0, transform: "rotate(-13.62deg)" }}
      >
        <img src={img1} alt="" className="w-full h-full object-cover" />
      </div>
      <div
        className="absolute rounded-[16px] overflow-hidden"
        style={{ width: 70, height: 70, top: 0, left: 38, transform: "rotate(17.38deg)", boxShadow: "0px 3px 12px rgba(0,0,0,0.44)" }}
      >
        <img src={img2} alt="" className="w-full h-full object-cover" />
      </div>
      <div
        className="absolute flex items-center justify-center rounded-full bg-white"
        style={{ width: 14, height: 14, top: 8, left: 98, border: `2.2px solid ${borderColor}` }}
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

export default function Collections({ onBack, onOpenCollection }: CollectionsProps) {
  return (
    <div className="relative overflow-hidden rounded-[30px]" style={{ width: 277, height: 600, background: "#0b0a14" }}>
      <div className="absolute inset-0">
        <img src={imgFrame2147223709} alt="" className="absolute" style={{ width: "450%", height: "145%", top: "-20%", left: "-100%", opacity: 0.7 }} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-9 z-20" />

      {/* Header */}
      <div className="absolute z-20 flex items-center justify-between" style={{ top: 36, left: 12, right: 12 }}>
        <div className="flex items-center gap-[7px]">
          <button onClick={onBack} className="flex items-center justify-center" style={{ width: 30, height: 30 }}>
            <img src="/icons/Icon6.svg" alt="назад" style={{ width: 13, height: 18 }} />
          </button>
          <p
            className="text-white leading-none"
            style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 21 }}
          >
            Коллекции
          </p>
        </div>
        <button className="flex items-center justify-center" style={{ width: 18, height: 18 }}>
          <img src="/icons/icon5.svg" alt="ещё" style={{ width: 18, height: 18 }} />
        </button>
      </div>

      {/* Segment control — поднят выше по Figma */}
      <div className="absolute z-20 flex items-center gap-[12px]" style={{ top: 64, left: 17 }}>
        <div className="flex items-center gap-[4px]">
          <span className="text-white" style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 15 }}>Мои</span>
          <span style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 15, color: "#8e7cf3" }}>9</span>
        </div>
        <span className="text-white/30" style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 15 }}>Общие</span>
        <span className="text-white/30" style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 15 }}>Рекомендации</span>
      </div>

      {/* Scrollable grid */}
      <div className="absolute z-10 overflow-y-auto" style={{ top: 95, left: 0, right: 0, bottom: 64 }}>
        <div className="flex flex-col gap-[22px] px-[11px] pb-[20px]">
          {Array.from({ length: Math.ceil(collections.length / 2) }, (_, rowIdx) => (
            <div key={rowIdx} className="flex gap-[7px]">
              {collections.slice(rowIdx * 2, rowIdx * 2 + 2).map((c, i) => (
                <CollectionCard
                  key={c.name}
                  {...c}
                  onClick={rowIdx === 1 && i === 0 ? onOpenCollection : undefined}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute z-20 bottom-[64px] left-0 right-0 pointer-events-none"
        style={{ height: 60, background: "linear-gradient(to top, rgba(12,14,24,0.9) 0%, rgba(12,14,24,0) 100%)" }}
      />

      {/* Tab bar — градиент + progressive blur */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(179.918deg, rgba(34,35,40,0) 3.211%, rgba(11,12,14,0.9) 68.505%, rgb(11,12,14) 99.862%)",
        }} />
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
