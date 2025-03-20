import { Button, Carousel } from "@/components";
import { FC } from "react";
import { Voucher } from ".";

export const Sale: FC = () => {
    const slides = Array.from({ length: 5 }).map((_, index) => (<Voucher/>));
    return (
        <div className="p-2.5 bg-white mt-2.5">
            <div className="flex justify-between">
                <div className="text-inkdark text-14 font-bold">Săn ưu đãi</div>
                <div className="flex">
                    <div className="text-12 text-ink">Xem tất cả   </div>
                    <img src="/images/general/arrow.png" className="size-4 opacity-50" alt="" />
                </div>
            </div>
            <Carousel slides={slides} />
        </div>
    )
}