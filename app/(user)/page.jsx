import Image from "next/image";

export default function Page() {
  return (
    <main className="relative w-full h-screen">
      <Image 
        src="/img_homepage/test.JPG" 
        alt="Example Image"
        fill // ทำให้รูปเต็มพื้นที่ของ parent
        className="object-cover" // ปรับให้ภาพเต็มจอแบบสวยงาม
      />
    </main>
  );
}
