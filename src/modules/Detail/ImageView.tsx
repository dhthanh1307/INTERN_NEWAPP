import { FC, useState } from "react";
import products from "../../mock/product.json"
export const ImageView: FC = () => {
    const product = products[0];
    return (
        <div className="text-inkdark bg-white pb-">
            <img src={product.image_link} className="w-full h-360" />
            <div className="flex justify-between bg-redlight py-2 px-4">
                <div className="flex gap-2">
                    <img src="/images/home/fs_icon.png" className="h-5" />
                    <div className="flex gap-0.5 text-12">
                        <div className="size-5 rounded-md bg-black text-center text-white">00</div>:
                        <div className="size-5 rounded-md bg-black text-center text-white">33</div>:
                        <div className="size-5 rounded-md bg-black text-center text-white">11</div>
                    </div>
                </div>
                <div className="text-12 ">Đã bán {product.sold}</div>
            </div>
            <div className="px-4 py-1 mb-4">
                <div className="text-10">Có 4 phân loại sản phẩm </div>
                <div className="flex gap-2">
                    <div className="size-12 border-2 border-normal rounded-lg">
                        <img src={product.image_link} className=" w-full rounded-lg" />
                    </div>
                    <div className="border mx-2 my-2"></div>
                    <div className="size-12 border-2 rounded-lg">
                        <img src={product.image_link} className=" w-full rounded-lg" />
                    </div>
                    <div className="size-12 border-2 rounded-lg">
                        <img src={product.image_link} className=" w-full rounded-lg" />
                    </div>
                    <div className="size-12 border-2  rounded-lg">
                        <img src={product.image_link} className=" w-full rounded-lg" />
                    </div>
                    <div className="size-12 border-2  rounded-lg">
                        <img src={product.image_link} className=" w-full rounded-lg" />
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-1">
                    <div className="text-10  overflow-x-auto">
                        <div className="flex text-nowrap gap-1">
                            <div className="border-dashed border rounded-lg px-1">
                                Tặng phiếu mua hàng Apple
                            </div>
                            <div className="border-dashed border rounded-lg px-1">
                                Tặng 03 tháng xem gói Gia Đình trên netflix vvvvvvvvvvvvvv
                            </div>
                        </div>
                    </div>
                    <img src="/images/general/arrow.png" className="size-3 opacity-50" alt="" />
                </div>
                <div className="flex items-center gap-2 py-2">
                    <div className="text-16 font-bold">{product.current_price.toLocaleString("vi-VN")}₫</div>
                    <del className="text-inklight text-12">{product.current_price.toLocaleString("vi-VN")}₫</del>
                    <div className="text-red text-12">-{product.discount_percentage}%</div>
                </div>
                <div className="text-12">
                    Điện thoại iPhone 16 Pro Max 256GB màu Titan tự nhiên đẹp siêu cấp Vip pro đẳng cấp, thời thượng năm 2025
                </div>
                <div className="flex justify-between">
                    <div className="flex text-12 text-inklight items-center gap-2">
                        <img src="/images/productDetail/star.png" className="size-3" />
                        <div>{product.rating} (123+)</div>
                        <div className="border"></div>
                        <div>Đã bán 5k</div>
                    </div>
                    <img src="/images/" className="size-5" />
                </div>

            </div>


        </div>
    )
}