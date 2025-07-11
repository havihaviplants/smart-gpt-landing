// pages/register.tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    business: "",
    referral: "",
  });

  // ref query → localStorage 저장 + 상태 초기화
  useEffect(() => {
    const ref = router.query.ref;
    if (typeof ref === "string") {
      localStorage.setItem("ref", ref);
      setForm((prev) => ({ ...prev, referral: ref }));
    } else {
      const storedRef = localStorage.getItem("ref");
      if (storedRef) {
        setForm((prev) => ({ ...prev, referral: storedRef }));
      }
    }
  }, [router.query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("📦 신청 내용:", form);
    // 🔜 TODO: API or Sheet 연동
    router.push("/thanks");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6">GPT 상담사 신청하기</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 border p-6 rounded-xl shadow"
      >
        <input
          type="text"
          name="name"
          placeholder="이름"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="연락처 (예: 010-1234-5678)"
          required
          value={form.phone}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="business"
          placeholder="업종 또는 가게 이름"
          value={form.business}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="referral"
          placeholder="추천 코드 (있다면)"
          value={form.referral}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-semibold"
        >
          ✍️ 신청하기
        </button>
      </form>
      <Link href="/">
        <p className="mt-6 text-blue-600 underline">← 메인으로 돌아가기</p>
      </Link>
    </main>
  );
}
