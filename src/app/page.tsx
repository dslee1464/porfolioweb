"use client";

const projects = [
  { id: 1, name: "Memsis.AI", desc: "(Humor AI)", color: "bg-blue-200" },
  { id: 2, name: "CLUID", desc: "Improving DNA coding(Decode)...", color: "bg-orange-200" },
  { id: 3, name: "김재섭 선거 캠페인", desc: "Campaign Design", color: "bg-pink-200" },
  { id: 4, name: "SO DOC.", desc: "A small animal clinical App", color: "bg-green-200" },
  { id: 5, name: "ATOI", desc: "Atopic Dermatitis App for Kids", color: "bg-purple-200" },
  { id: 6, name: "4MERA", desc: "An AI Filter APP", color: "bg-yellow-200" },
  { id: 7, name: "PLECTZ", desc: "BX Design", color: "bg-red-200" },
  { id: 8, name: "ARTIQ", desc: "Medical AI Startup", color: "bg-teal-200" },
  { id: 9, name: "꽃 포스터", desc: "Flower Expo Poster using Korean Type", color: "bg-indigo-200" },
  { id: 10, name: "Lissajou Type", desc: "물리학 곡선을 이용한 Type Design", color: "bg-gray-200" },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white">
      <main className="w-full py-8">
        {/* 5열 그리드 */}
        <div className="grid grid-cols-5 gap-x-2 gap-y-8 w-full">
          {projects.map((item) => (
            <Thumbnail key={item.id} data={item} />
          ))}
        </div>
      </main>
    </div>
  );
}

/** 썸네일 */
function Thumbnail({ data }: { data: any }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      {/* 썸네일 박스 */}
      <div
        className={`
          group
          relative 
          w-full
          aspect-[9/16]   
          overflow-hidden 
          rounded-[5px] 
          transition-all 
          duration-300 
          ${data.color}
          hover:rounded-[20px]
        `}
        style={{
          // 인라인 스타일로 반 픽셀 borderWidth 적용
          borderWidth: "0.5px",
          borderStyle: "solid",
          borderColor: "#BBBBBB",
        }}
      >
        {/* 왼쪽 상단: 프로젝트명 칩 */}
        <div
          className="
            absolute top-2 left-2 
            bg-white text-gray-700 text-xs 
            px-3 py-1 rounded-full shadow
          "
        >
          {data.name}
        </div>

        {/* 오른쪽 상단: SVG 화살표 아이콘 버튼 */}
        <div
          className="
            absolute top-2 right-2
            bg-white text-gray-700
            w-8 h-8
            rounded-full shadow
            flex items-center justify-center
            transition-transform duration-300
            group-hover:scale-110
          "
        >
          {/* Material Design 'arrow_forward' 아이콘 예시 */}
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5f6368"><path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z"/></svg>
        </div>
      </div>

      {/* 하단 설명 */}
      <p className="text-sm text-gray-600 text-center">
        {data.desc}
      </p>
    </div>
  );
}
