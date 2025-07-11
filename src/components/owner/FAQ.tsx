export default function FAQ() {
  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">자주 묻는 질문</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Q. 사용법이 어렵진 않나요?</h3>
          <p className="text-gray-600">아니요! 시트를 복사하고 연결만 하면 바로 사용 가능합니다.</p>
        </div>
        <div>
          <h3 className="font-semibold">Q. 답변 정확도는 어떤가요?</h3>
          <p className="text-gray-600">고객이 직접 입력한 데이터 기반으로 GPT가 응답합니다. 신뢰도는 사용자의 시트에 달려있습니다.</p>
        </div>
        <div>
          <h3 className="font-semibold">Q. 고객 데이터는 안전한가요?</h3>
          <p className="text-gray-600">네, 고객 데이터는 GPT에 직접 저장되지 않으며 API 요청 단위로만 처리됩니다.</p>
        </div>
      </div>
    </section>
  );
}