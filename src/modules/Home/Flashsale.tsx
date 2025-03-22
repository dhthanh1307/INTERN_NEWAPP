import { FC } from "react";

import { Carousel } from "@/components";
import { ProducFStItem } from "@/components/Card/ProductFS";

import products from "../../mock/product.json"
export const Flashsale: FC = () => {
    const slides = Array.from({ length: Math.ceil(products.length / 3) }, (_, i) => (
        <div className="flex w-full">
            {products.slice(i * 3, i * 3 + 3).map((product, index) => (
                <div key={index} className="w-1/3 p-2">
                    <ProducFStItem product={product} />
                </div>
            ))}
        </div>
    ));

    return (
        <div className="mt-2.5 bg-white p-2.5">
            <div className="flex justify-between pb-2.5">
                <div className="flex gap-2">
                    <img src="/images/home/fs_icon.png" className="h-5" />
                    <div className="flex gap-0.5 text-12">
                        <div className="size-5 rounded-md bg-black text-center text-white">00</div>:
                        <div className="size-5 rounded-md bg-black text-center text-white">33</div>:
                        <div className="size-5 rounded-md bg-black text-center text-white">11</div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="text-12 text-ink">Xem thêm   </div>
                    <img src="/images/general/arrow.png" className="size-3 opacity-50" alt="" />
                </div>
            </div>
            <Carousel slides={slides}/>
        </div>
    )
}