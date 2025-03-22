import React, { FC } from "react";

import { Product } from "@/types";

export const ProductItem: FC<{ product: Product }> = ({ product }) => {

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
            <div className="px-2.5 py-3 text-12">
                <div className="line-clamp-2 text-ink">{product.name}</div>
                <div className="text-14 font-semibold">{product.current_price.toLocaleString("vi-VN")} ₫</div>
                <div className="flex justify-between text-ink ">
                    <div className="flex items-center gap-1">
                        <img src="/images/productDetail/star.png" className="size-3" />
                        <div>{product.rating} (123+)</div>
                    </div>
                    <div className="m-1 border" />
                    <div>Đã bán {product.sold}</div>
                </div>
                <div className="flex items-center gap-1 text-ink">
                    <img src="/images/general/truck_fast.png" className="size-3" />
                    <div>Giao 2 giờ</div>
                </div>
            </div>

        </div>
    )
}