import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        당신의 시간을 아껴주는 GPT 자동상담사
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        반복되는 고객 질문에 지치셨나요? <br className="hidden md:block" />
        지금 바로 자동화하고, <span className="font-semibold">매출 관리에 집중하세요.</span>
      </p>
      <Link href="/register">
        <span className="inline-block bg-black text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition">
          무료 체험 시작하기
        </span>
      </Link>
    </section>
  );
}
