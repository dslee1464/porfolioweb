// src/app/cv/page.tsx

import Image from "next/image";
import profileImg from "@/public/profile.png"; // 타입 세이프 방식 (선택사항)

export default function CVPage() {
  return (
    <section>
      {/* 메인 타이틀 */}
      <h1 className="text-4xl font-bold mb-6">CV</h1>

      {/* 프로필 섹션 */}
      <div className="flex flex-col items-center mb-12">
        <div className="w-40 h-40 relative mb-4">
          <Image
            src="/profile.png"
            alt="Profile image"
            width={160}
            height={160}
            className="object-cover rounded-full"
          />
        </div>
        <h2 className="text-2xl font-bold mb-1">Da Sol Lee</h2>
        <p className="text-gray-600">Product Designer, based in Seoul</p>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Education</h3>

        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <div className="text-sm text-gray-700 font-medium">2017 - 2025</div>
          <div className="font-semibold">Hongik University, Seoul, South Korea</div>
          <div className="text-sm text-gray-600">B.F.A Visual Communication Design</div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="text-sm text-gray-700 font-medium">2013 - 2016</div>
          <div className="font-semibold">
            Seoul Arts High School, Seoul, South Korea
          </div>
          <div className="text-sm text-gray-600">Major: Art</div>
        </div>
      </div>

      <hr className="my-6" />

      {/* Research Interest */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">
          Research <span className="bg-yellow-300">Interest</span>
        </h3>

        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">
            Human-AI Interaction
          </span>
          <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">
            Human-Centered Interaction
          </span>
          <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">
            Design Research
          </span>
        </div>
      </div>

      <hr className="my-6" />

      {/* Publication */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Publication</h3>

        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="text-sm text-gray-700 font-medium">
            2024 December
          </div>
          <div className="font-semibold">
            Humor Generated By AI (Hongik University)
          </div>
          <div className="text-sm text-gray-600">
            Dasol Lee, Jaewhan Yeom, Jaeyoung Yun
          </div>
        </div>
      </div>

      <hr className="my-6" />

      {/* Skill */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Skill</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            Figma
          </span>
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            Glyphs
          </span>
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            Framer
          </span>
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            Photoshop
          </span>
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            Illustrator
          </span>
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            After Effects
          </span>
        </div>
      </div>
    </section>
  );
}
