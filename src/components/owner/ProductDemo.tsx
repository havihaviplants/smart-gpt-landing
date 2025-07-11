export default function ProductDemo() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">어떻게 작동하나요?</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>📄 Google Sheet에 Q&A를 정리</li>
        <li>⚙️ FastAPI가 시트를 읽고 GPT에 연결</li>
        <li>🤖 고객이 질문하면, GPT가 해당 내용 기반으로 자동 응답</li>
        <li>🔗 이 모든 과정이 하나의 링크로 제공됩니다</li>
      </ul>
    </section>
  );
}