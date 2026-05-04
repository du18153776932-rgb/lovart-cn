import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="flex flex-col items-center justify-center gap-8 px-8 py-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-2xl font-bold text-white shadow-lg">
            L
          </div>
          <h1 className="text-5xl font-bold text-gray-900">Lovart</h1>
        </div>

        {/* Tagline */}
        <p className="max-w-md text-center text-xl text-gray-600">
          AI 驱动的设计平台，让创意触手可及
        </p>

        {/* CTA Button */}
        <Link
          href="/lovart"
          className="transform rounded-full bg-black px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-gray-800 hover:shadow-xl"
        >
          开始创作 →
        </Link>

        {/* Features */}
        <div className="mt-8 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-3 text-3xl">🎨</div>
            <h3 className="mb-2 font-semibold text-gray-900">智能设计</h3>
            <p className="text-sm text-gray-600">
              AI 助手帮你快速生成创意设计方案
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-3 text-3xl">🖼️</div>
            <h3 className="mb-2 font-semibold text-gray-900">图像生成</h3>
            <p className="text-sm text-gray-600">
              输入描述即可生成高质量图片内容
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-3 text-3xl">☁️</div>
            <h3 className="mb-2 font-semibold text-gray-900">实时协作</h3>
            <p className="text-sm text-gray-600">
              云端保存，随时随地访问你的项目
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}