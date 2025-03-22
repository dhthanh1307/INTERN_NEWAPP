import { FC } from "react";

import {  Carousel } from "@/components";

import { Voucher } from ".";

export const Sale: FC = () => {
    const slides = Array.from({ length: 5 }).map((_, index) => (<Voucher key={index}/>));

    return (
        <div className="mt-2.5 bg-white p-2.5">
            <div className="flex justify-between pb-2.5">
                <div className="text-14 font-bold text-inkdark">Săn ưu đãi</div>
                <div className="flex items-center">
                    <div className="text-12 text-ink">Xem tất cả   </div>
                    <img src="/images/general/arrow.png" className="size-3 opacity-50" alt="" />
                </div>
            </div>
            <Carousel slides={slides}  />
        </div>
    )
}