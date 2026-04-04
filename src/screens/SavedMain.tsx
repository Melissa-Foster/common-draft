// Screen 1: Главная — Сохранёнки

// Фон и засветы (свежие URL из Figma)
const imgFrame2147223757 = "https://www.figma.com/api/mcp/asset/4e1ab4ee-1ca2-4704-8ed4-5d98c5a68242"; // синий засвет
const imgFrame2147223756 = "https://www.figma.com/api/mcp/asset/42689b95-4a5f-4231-a72a-887d09b7a671"; // орбиты
const imgFrame2147223758 = "https://www.figma.com/api/mcp/asset/7d2a66ca-a958-452e-99c6-cc47155ac39d"; // светлый засвет сверху

// Коллекции
const imgRectangle5  = "https://www.figma.com/api/mcp/asset/3547f8bb-b833-41fa-8913-06b5c97dc91c";
const imgRectangle4  = "https://www.figma.com/api/mcp/asset/a63b76f7-3eeb-4ab6-9dc1-8b7bc139a99c";
const imgRectangle6  = "https://www.figma.com/api/mcp/asset/8392ac49-e4f9-46f6-b416-0f1a03a87c79";
const imgRectangle7  = "https://www.figma.com/api/mcp/asset/5d5336c8-76ff-40c6-a600-fd4ef135a4c3";
const imgRectangle8  = "https://www.figma.com/api/mcp/asset/01dcdba9-65c9-4500-aa13-77580686cb7a";
const imgRectangle9  = "https://www.figma.com/api/mcp/asset/eceb3356-4fdd-4307-b904-d1ef367f41bb";
const imgRectangle10 = "https://www.figma.com/api/mcp/asset/7da24b75-43a5-42e0-bac5-cb390dd317b7";
const imgRectangle11 = "https://www.figma.com/api/mcp/asset/16fdb238-97bb-4444-be83-bc8aee416eb4";
const imgRectangle12 = "https://www.figma.com/api/mcp/asset/71286de5-3147-4e21-81e5-239cfb305b93";
const imgRectangle13 = "https://www.figma.com/api/mcp/asset/dfe16165-43d4-4f33-8547-ed1608878d5f";
const imgRectangle14 = "https://www.figma.com/api/mcp/asset/6133e77c-e781-4faa-adee-5997ccc02a72";
const imgRectangle15 = "https://www.figma.com/api/mcp/asset/f113fbe7-9d89-42a4-afeb-288c1403ba1c";
const imgRectangle16 = "https://www.figma.com/api/mcp/asset/fef15f0e-48bc-4997-b7fe-abc5f4963fe5";
const imgRectangle17 = "https://www.figma.com/api/mcp/asset/24759f1f-256d-4829-a0c9-47bb7f21b437";
const imgRectangle18 = "https://www.figma.com/api/mcp/asset/bc7901d1-544c-447f-a429-6016e77cb49a";
const imgRectangle19 = "https://www.figma.com/api/mcp/asset/463a2141-5a90-44da-b31e-1a71ffef69aa";

// Декоративные фото
const imgDecorSmall  = "https://www.figma.com/api/mcp/asset/c65d9ca0-486d-4a0b-8121-8c0c38e04a79"; // rotate(-9.2deg)
const imgDecorMed    = "https://www.figma.com/api/mcp/asset/3f798e14-69e2-48aa-a5f7-35210f44be14"; // rotate(-41.6deg)
const imgDecorTiny   = "https://www.figma.com/api/mcp/asset/c65d9ca0-486d-4a0b-8121-8c0c38e04a79"; // rotate(7.26deg) base
const imgDecorTiny2  = "https://www.figma.com/api/mcp/asset/40e3d342-b609-436b-9158-b34cb2585b86"; // tiny layer 2

// Пост карточка
const imgEllipse = "https://www.figma.com/api/mcp/asset/ec8d1daf-ca62-4e3e-a87b-24744a10e286";

// Точки-индикаторы
const imgDotActive   = "https://www.figma.com/api/mcp/asset/9a7dae87-9c00-4ded-ada1-dd1c54766d34";
const imgDotInactive = "https://www.figma.com/api/mcp/asset/1d9749dc-d146-44c1-ba8e-52ecf78eedf3";

interface SavedMainProps {
  onOpenCollections: () => void;
}

const collections = [
  { name: "Все сохранёнки", count: 23, img1: imgRectangle5,  img2: imgRectangle4,  borderColor: "#0f1014" },
  { name: "Дизайн",         count: 8,  img1: imgRectangle6,  img2: imgRectangle7,  borderColor: "#0f1014" },
  { name: "Архитектура",    count: 21, img1: imgRectangle8,  img2: imgRectangle9,  borderColor: "#0b0a14" },
  { name: "На выхи",        count: 4,  img1: imgRectangle10, img2: imgRectangle11, borderColor: "#0b0a14" },
  { name: "Свадьба",        count: 23, img1: imgRectangle12, img2: imgRectangle13, borderColor: "#0b0a14" },
  { name: "Отпуск",         count: 9,  img1: imgRectangle14, img2: imgRectangle15, borderColor: "#0b0a14" },
  { name: "Научпоп",        count: 23, img1: imgRectangle16, img2: imgRectangle17, borderColor: "#1d3351" },
  { name: "Постеры",        count: 23, img1: imgRectangle18, img2: imgRectangle19, borderColor: "#18273f" },
];

function CollectionCard({
  name, count, img1, img2, borderColor,
}: {
  name: string; count: number; img1: string; img2: string; borderColor: string;
}) {
  return (
    <div className="relative shrink-0" style={{ width: 125, height: 106 }}>
      {/* Задняя карточка */}
      <div className="absolute rounded-[16px] overflow-hidden"
        style={{ width: 70, height: 70, top: 8, left: 0, transform: "rotate(-13.62deg)", boxShadow: "0px 3px 12px rgba(0,0,0,0.44)" }}>
        <img src={img1} alt="" className="w-full h-full object-cover" />
      </div>
      {/* Передняя карточка */}
      <div className="absolute rounded-[16px] overflow-hidden"
        style={{ width: 70, height: 70, top: 0, left: 38, transform: "rotate(17.38deg)", boxShadow: "0px 3px 12px rgba(0,0,0,0.44)" }}>
        <img src={img2} alt="" className="w-full h-full object-cover" />
      </div>
      {/* Каунтер — left: 98px по Figma */}
      <div className="absolute flex items-center justify-center rounded-full bg-white"
        style={{ width: 14, height: 14, top: 8, left: 98, border: `2.2px solid ${borderColor}` }}>
        <span style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 8, color: "#444f5f" }}>
          {count}
        </span>
      </div>
      {/* Подпись */}
      <p className="absolute text-center text-white whitespace-nowrap"
        style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 10, bottom: 0, left: "50%", transform: "translateX(-50%)" }}>
        {name}
      </p>
    </div>
  );
}

export default function SavedMain({ onOpenCollections }: SavedMainProps) {
  return (
    <div className="relative overflow-hidden rounded-[30px]" style={{ width: 277, height: 600, background: "#0b0a14" }}>

      {/* ─── ФОНОВЫЕ СЛОИ ─── */}

      {/* Синий засвет — выходит за края контейнера */}
      <div className="absolute" style={{ top: 0, left: 14, width: 283, height: 608, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-14.56%", right: "-138.35%", bottom: "-15.94%", left: "-128.88%" }}>
          <img src={imgFrame2147223757} alt="" className="block w-full h-full" />
        </div>
      </div>

      {/* Орбиты/линии */}
      <div className="absolute" style={{ top: 108.71, left: -20.71, width: 352.769, height: 191.545 }}>
        <img src={imgFrame2147223756} alt="" className="w-full h-full" />
      </div>

      {/* ─── ЗАГОЛОВОК ─── */}

      {/* Светлый засвет сверху */}
      <div className="absolute overflow-hidden" style={{ top: 0, left: -2, width: 282, height: 60 }}>
        <div style={{ position: "absolute", top: "-303.6%", right: "-7.41%", bottom: "-43.35%", left: "-8.95%" }}>
          <img src={imgFrame2147223758} alt="" className="block w-full h-full" />
        </div>
      </div>

      {/* Градиент под заголовком */}
      <div className="absolute" style={{
        top: 33, left: -6, width: 284, height: 55,
        background: "linear-gradient(to bottom, #0b0b14 0%, rgba(11,11,20,0) 100%)",
      }} />

      {/* Заголовок "Сохранёнки" */}
      <p className="absolute text-white text-center whitespace-nowrap z-20"
        style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 29.582, top: 37.72, left: "50%", transform: "translateX(-50%)" }}>
        Сохранёнки
      </p>

      {/* ─── ПЛАВАЮЩИЕ КАРТОЧКИ ─── */}

      {/* Большая фото справа */}
      <div className="absolute flex items-center justify-center" style={{ top: 39.36, left: 157.81, width: 162.645, height: 162.415 }}>
        <div style={{ transform: "rotate(31.78deg)" }}>
          <div className="overflow-hidden" style={{ width: 118.412, height: 117.699, borderRadius: 33.764 }}>
            <img src={imgRectangle8} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Большая фото слева */}
      <div className="absolute flex items-center justify-center" style={{ top: 85.79, left: -27.36, width: 118.519, height: 118.086 }}>
        <div style={{ transform: "rotate(-13.78deg)" }}>
          <div className="overflow-hidden" style={{ width: 98.114, height: 97.523, borderRadius: 21 }}>
            <img src={imgRectangle9} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Пост-карточка */}
      <div className="absolute flex items-center justify-center" style={{ top: 204.12, left: 142.73, width: 102.58, height: 103.828 }}>
        <div style={{ transform: "rotate(11.12deg)" }}>
          <div style={{
            width: 87.113, height: 88.697,
            background: "#151619",
            borderRadius: 18.237,
            border: "0.829px solid rgba(255,255,255,0.08)",
            padding: "9px",
            display: "flex", flexDirection: "column", gap: 14,
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                <img src={imgEllipse} alt="" style={{ width: 11.763, height: 11.763, borderRadius: "50%" }} />
                <p style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 6.861, color: "white", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1, textAlign: "center" }}>
                  Андрей Фролова
                </p>
              </div>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 5.391, color: "white", opacity: 0.8, lineHeight: 1.2, height: 34.307, overflow: "hidden" }}>
                Одно здание может изменить восприятие города 🏛️✨. Архитектура — это не только про форму, но и про атмосферу места!
              </p>
            </div>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 4.901, color: "white", opacity: 0.3 }}>
              22 марта
            </p>
          </div>
        </div>
      </div>

      {/* Декор: rotate(-41.6deg) 51px */}
      <div className="absolute flex items-center justify-center" style={{ top: 205.6, left: 49.55, width: 71.726, height: 71.7 }}>
        <div style={{ transform: "rotate(-41.6deg)" }}>
          <div className="overflow-hidden" style={{ width: 50.951, height: 50.644, borderRadius: 15.531 }}>
            <img src={imgDecorMed} alt="" className="absolute max-w-none"
              style={{ height: "124.77%", left: "-61.48%", top: "-24.77%", width: "186.03%", position: "absolute" }} />
          </div>
        </div>
      </div>

      {/* Декор: rotate(-9.2deg) 33px */}
      <div className="absolute flex items-center justify-center" style={{ top: 153.09, left: 121.29, width: 38.044, height: 37.879 }}>
        <div style={{ transform: "rotate(-9.2deg)" }}>
          <div className="overflow-hidden" style={{ width: 33.198, height: 32.998, borderRadius: 9.664 }}>
            <img src={imgDecorSmall} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Декор: rotate(7.26deg) 15px */}
      <div className="absolute flex items-center justify-center" style={{ top: 107.21, left: 112.84, width: 16.598, height: 16.521 }}>
        <div style={{ transform: "rotate(7.26deg)" }}>
          <div style={{ width: 14.851, height: 14.761, borderRadius: 4.323, overflow: "hidden", opacity: 0.7, position: "relative" }}>
            <img src={imgDecorTiny} alt="" className="absolute w-full h-full object-cover" style={{ borderRadius: 4.323 }} />
            <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: 4.323 }}>
              <img src={imgDecorTiny2} alt="" className="absolute max-w-none"
                style={{ height: "153.21%", left: 0, top: "-48.78%", width: "140.73%" }} />
            </div>
          </div>
        </div>
      </div>

      {/* ─── AI КОЛЛЕКЦИЯ ─── */}
      <div className="absolute flex flex-col items-center z-20"
        style={{ top: 316.05, left: "50%", transform: "translateX(-50%)", width: 124.244, gap: 8.875 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5.916, width: "100%" }}>
          <p style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 17.749, color: "white", textAlign: "center", lineHeight: 1 }}>
            Архитектура
          </p>
          <p className="mix-blend-plus-lighter" style={{ fontFamily: "'Onest', sans-serif", fontSize: 10.354, color: "white", opacity: 0.4, textAlign: "center", lineHeight: 1.1, width: "100%" }}>
            Коллекция по вашим сохраненкам
          </p>
        </div>
        {/* Три точки — все 4.437px, mix-blend-plus-lighter */}
        <div style={{ display: "flex", alignItems: "center", gap: 4.437 }}>
          <div className="mix-blend-plus-lighter" style={{ width: 4.437, height: 4.437, borderRadius: "50%", overflow: "hidden" }}>
            <img src={imgDotActive} alt="" className="w-full h-full" />
          </div>
          <div className="mix-blend-plus-lighter" style={{ width: 4.437, height: 4.437, borderRadius: "50%", overflow: "hidden" }}>
            <img src={imgDotInactive} alt="" className="w-full h-full" />
          </div>
          <div className="mix-blend-plus-lighter" style={{ width: 4.437, height: 4.437, borderRadius: "50%", overflow: "hidden" }}>
            <img src={imgDotInactive} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* ─── BOTTOM SHEET ─── */}
      {/* top: 396.4px, height: 204px по Figma */}
      <div className="absolute left-0 right-0 z-30 rounded-tl-[22px] rounded-tr-[22px]"
        style={{ top: 396.4, height: 204, background: "#0f1014", backdropFilter: "blur(5.916px)" }}
        onClick={onOpenCollections}
      >
        {/* Сегмент контрол: top:18.6, left:22 по Figma */}
        <div className="absolute flex items-center gap-[12px]" style={{ top: 18.6, left: 22 }}>
          <div className="flex items-center gap-[4px]">
            <span style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 14.875, color: "white" }}>Мои</span>
            <span style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 14.875, color: "#8e7cf3" }}>9</span>
          </div>
          <span className="mix-blend-plus-lighter" style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 14.875, color: "white", opacity: 0.3 }}>Общие</span>
          <span className="mix-blend-plus-lighter" style={{ fontFamily: "'VK Sans Display', sans-serif", fontWeight: 600, fontSize: 14.875, color: "white", opacity: 0.3 }}>Рекомендации</span>
        </div>

        {/* Карточки коллекций: top:45.85px по Figma, уходят под таббар */}
        <div className="absolute overflow-y-auto" style={{ top: 45.85, left: 0, right: 0, bottom: 0 }}>
          <div className="flex flex-col px-[11px]" style={{ gap: 22 }}>
            {Array.from({ length: Math.ceil(collections.length / 2) }, (_, rowIdx) => (
              <div key={rowIdx} className="flex" style={{ gap: 7.4 }}>
                {collections.slice(rowIdx * 2, rowIdx * 2 + 2).map((c) => (
                  <CollectionCard key={c.name} {...c} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ─── ТАББАР ─── */}
        {/* По Figma: h-[141.995px], gradient + blur, иконки внизу */}
        <div className="absolute bottom-0 left-0 right-0 z-40" style={{ height: 141.995 }}>
          {/* Фоновый градиент */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(179.918deg, rgba(34,35,40,0) 3.211%, rgba(11,12,14,0.9) 68.505%, rgb(11,12,14) 99.862%)",
          }} />
          {/* Progressive blur — нарастает снизу */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backdropFilter: "blur(15.531px)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
            maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          }} />

          {/* Иконки — h: 37.489px, над home indicator */}
          <div className="absolute left-0 right-0 flex items-center"
            style={{ bottom: 26.555, height: 37.489 }}>
            {/* Активная: Главная (flex-1) */}
            <div className="flex-1 flex justify-center items-center"
              style={{ paddingTop: 3.124, paddingBottom: 1.562 }}>
              <img src="/icons/Icon1.svg" alt="Главная" style={{ width: 21.869, height: 21.869 }} />
            </div>
            {/* Неактивные: 69.334px каждая */}
            {["/icons/Icon2.svg", "/icons/Icon3.svg", "/icons/Icon4.svg"].map((src, i) => (
              <div key={i} className="flex justify-center items-center mix-blend-plus-lighter"
                style={{ width: 69.334, paddingTop: 3.124, paddingBottom: 1.562, opacity: 0.3 }}>
                <img src={src} alt="" style={{ width: 21.869, height: 21.869 }} />
              </div>
            ))}
          </div>

          {/* Home indicator — h: 26.555px */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center"
            style={{ height: 26.555, paddingBottom: 6.25 }}>
            <div className="rounded-full" style={{ width: 112.467, height: 3.905, background: "rgba(142,142,147,0.25)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
