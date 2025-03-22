import React, { FC } from "react";

import { Product } from "@/types";

export const ProducFStItem: FC<{ product: Product }> = ({ product }) => {

    return (
        <div className="w-full rounded-lg bg-white">
            <div className="relative">
                <div className="absolute left-0 top-0 rounded-br-lg rounded-tl-lg bg-red px-2 text-10 text-white">-{product.discount_percentage}%</div>
                <div className="absolute bottom-0 w-fit rounded-tr-lg bg-normal">
                    <img src="/images/productDetail/fast_delivery_logo.png" className="w-16 p-1.5" />
                </div>
                <div className="flex min-h-[150px] w-full items-center">
                    <img className="rounded-tl-lg rounded-tr-lg " src={product.image_link} alt="" />
                </div>
            </div>
            <div className="px-2.5 py-1 text-12">
                <div className="line-clamp-2 text-ink">{product.name}</div>
                <div className="font-semibold">{product.current_price.toLocaleString("vi-VN")} ₫</div>
                <div />
            </div>
            <div className="mx-2.5 mb-2.5 flex rounded-xl text-center text-10 text-white"
                style={{ background: `linear-gradient(to right,#FF9900, #E70127 ${(product.remaining_quantity / 30) * 100}%, #e5e7eb ${(product.remaining_quantity / 30) * 100}%)`, }}>
                <div className="flex items-center">
                    <img src="/images/productBox/fire_fs.png" className="size-4" />
                </div>
                <div className="w-full text-center"> Đã bán {product.remaining_quantity}/30</div>
            </div>
        </div>
    )
}