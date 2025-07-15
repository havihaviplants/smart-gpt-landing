import { useState } from "react";

// ✅ 초기 상태 상수화
const initialFormData = {
  name: "",
  phone: "",
  date: "",
  time: "",
  memo: "",
};

export default function ReserveForm() {
  const [formData, setFormData] = useState(initialFormData);

  // ✅ 핸들러 모듈화
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("📌 예약 요청:", formData);

    try {
      // ✅ 백엔드로 전송할 데이터 매핑
      const payload = {
        name: formData.name,
        phone: formData.phone,
        business: `${formData.date} ${formData.time}`, // 👉 date + time을 하나의 필드로 business에 저장
        referral_code: formData.memo || "", // 👉 memo를 추천코드로 활용 (비어 있으면 빈 문자열)
      };

    const response = await fetch("https://smart-gpt-backend.onrender.com/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ 예약이 완료되었습니다.");
        setFormData(initialFormData); // 초기화
      } else {
        alert("❌ 서버 오류: " + result.message);
      }
    } catch (error) {
      alert("❌ 예약 중 네트워크 오류가 발생했습니다.");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white shadow-md rounded-xl p-6 w-full max-w-lg mx-auto"
    >
      <h2 className="text-xl font-semibold text-center mb-4">예약 신청</h2>

      {[
        { name: "name", type: "text", placeholder: "이름" },
        { name: "phone", type: "tel", placeholder: "전화번호" },
        { name: "date", type: "date" },
        { name: "time", type: "time" },
      ].map((input) => (
        <input
          key={input.name}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          value={(formData as any)[input.name]}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
          required
        />
      ))}

      <textarea
        name="memo"
        placeholder="추천 코드 또는 요청사항 (선택)"
        value={formData.memo}
        onChange={handleChange}
        className="w-full border rounded-lg px-4 py-2"
        rows={3}
      />

      <button
        type="submit"
        className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800"
      >
        예약하기
      </button>
    </form>
  );
}
