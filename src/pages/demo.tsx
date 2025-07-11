import ChatDemo from "../components/owner/ChatDemo";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">GPT 상담사 데모</h1>
      <ChatDemo />
    </main>
  );
}
