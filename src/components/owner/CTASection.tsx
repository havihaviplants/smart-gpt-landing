import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gray-100 py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
        지금 바로 자동화하세요
      </h2>
      <p className="text-gray-700 mb-6">
        고객 응대를 더 빠르게, 더 정확하게.<br />
        GPT 상담사가 여러분의 시간을 절약해 드립니다.
      </p>
      <Link href="/register">
        <span className="inline-block bg-black text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition">
          무료 시작하기
        </span>
      </Link>
    </section>
  );
}