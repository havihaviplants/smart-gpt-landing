// frontend/pages/index.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">
          24시간 대신 일하는<br />
          <span className="text-blue-600">가게 GPT 직원</span>
        </h1>
        <p className="text-lg text-gray-600">
          예약, 응대, 공지까지 자동으로 처리합니다.<br />
          쉬는 날에도, 바쁜 시간에도 고객 대응 걱정 없이.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Link href="/demo">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow">
              💬 무료 체험하기
            </button>
          </Link>
          <Link href="/register">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-3 rounded-xl">
              신청하러 가기
            </button>
          </Link>
        </div>
      </section>

      {/* Feature Preview */}
      <section className="mt-16 max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-semibold">💡 어떤 기능이 있나요?</h2>
        <ul className="text-gray-700 space-y-2">
          <li>✅ 영업시간/예약 가능 여부 자동 응답</li>
          <li>✅ 고객 질문에 시트 기반 GPT가 대답</li>
          <li>✅ 공지사항 자동 전달</li>
          <li>✅ 셋업 완료 시 전용 링크 발급</li>
        </ul>
      </section>

      {/* Social Proof (가짜 후기) */}
      <section className="mt-20 max-w-2xl mx-auto text-center space-y-6">
        <h3 className="text-xl font-semibold">🧡 사용 중인 사장님들</h3>
        <blockquote className="text-gray-600 italic">
          “장사 준비로 정신없었는데, 예약 응대를 AI가 해줘서 진짜 살 것 같아요.”
          <br />– 카페 사장님 이OO
        </blockquote>
        <blockquote className="text-gray-600 italic">
          “고객들이 알아서 질문하고 챗봇이 설명해주니, 카톡 대응 줄었어요.”
          <br />– 미용실 대표 김OO
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="mt-16 text-center">
        <p className="text-lg mb-4 font-medium">
          시작은 지금. GPT 상담사, 내 가게에 들여놓기
        </p>
        <Link href="/register">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg">
            ✍️ 신청하러 가기
          </button>
        </Link>
      </section>
    </main>
  );
}
