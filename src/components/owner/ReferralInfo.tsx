export default function ReferralInfo() {
  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">제휴 파트너 혜택</h2>
      <p className="text-gray-700 mb-4">
        스마트 GPT 상담사를 소개하면, 추천받은 고객이 결제할 때마다 <strong>매출의 10~20%</strong>를 수익으로 공유받습니다.
      </p>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <p className="font-mono text-sm">예시 링크:</p>
        <code className="text-sm text-blue-600">https://smartdm.site/register?ref=OWNER123</code>
      </div>
      <p className="text-gray-600 text-sm">
        추천 정보는 자동으로 기록되며, 정산은 월 단위로 투명하게 처리됩니다.
      </p>
    </section>
  );
}