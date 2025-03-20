"use client";
import { Header } from "@/components";
import { Promotion, Sale } from "@/modules";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-cloud">
      <Header />
      <Promotion/>
      <Sale/>
      <div>
        djdj
      </div>
    </div>
  );
}
