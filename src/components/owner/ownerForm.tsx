// src/components/owner/OwnerForm.tsx
"use client";

import { useState } from "react";

const OwnerForm = () => {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">이름 또는 상호명</label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">업종 / 서비스 분야</label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">연락처 (카카오톡 ID 또는 이메일)</label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        제출하기
      </button>

      {submitted && (
        <p className="text-green-600 mt-4">✅ 신청이 완료되었습니다.</p>
      )}
    </form>
  );
};

export default OwnerForm;
