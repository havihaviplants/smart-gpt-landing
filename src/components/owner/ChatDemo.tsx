// components/owner/ChatDemo.tsx
import { useState } from "react";

export default function ChatDemo() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 더미 응답 (후에 실제 GPT 연결)
    setResponse("📩 GPT 응답: 예시로 안내드릴 수 있습니다. 배송은 2~3일 소요됩니다.");
  };

  return (
    <section className="max-w-xl mx-auto space-y-4">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="궁금한 내용을 입력해보세요"
          className="border px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          GPT에게 물어보기
        </button>
      </form>
      {response && (
        <div className="bg-gray-100 p-4 rounded shadow">
          {response}
        </div>
      )}
    </section>
  );
}
