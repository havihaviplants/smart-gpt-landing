import OwnerIntro from "@/components/owner/ownerIntro";
import OwnerForm from "@/components/owner/ownerForm";


export default function OwnerPage() {
  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <OwnerIntro />
      <OwnerForm />
    </div>
  );
}
