"use client";
import { Banner, Header, NaviBar } from "@/components";
import { Flashsale, ListProduct, Promotion, Sale } from "@/modules";
// import { useRouter } from "next/navigation";

export default function Home() {
  // const router = useRouter();
  return (
    <div className="bg-cloud">
      <div className="bg-normal">
        <Header />
      </div>
      <Promotion />
      <Sale />
      <Flashsale />
      <Banner src={["./images/home/banner.png"]} className="p-2.5 " containerClassName="mt-2.5" />
      <ListProduct />
      <NaviBar />
    </div>
  );
}
