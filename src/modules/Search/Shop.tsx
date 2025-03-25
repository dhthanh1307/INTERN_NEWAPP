import { FC } from "react";
import products from "../../mock/product.json"
import categories from "../../mock/categories.json"
export const Shop: FC = () => {

    return (
        <div className="mt-2.5 bg-white p-2.5">
            <div className="flex justify-between pb-2.5">
                <div className="flex items-center gap-2">
                    <img src="/images/home/mwg.png" className="size-8 " />
                    <div className="text-14 font-bold text-inkdark">Thế giới di động</div>
                </div>
                <div className="flex items-center">
                    <div className="text-12 text-ink">Xem Shop  </div>
                    <img src="/images/general/arrow.png" className="size-3 opacity-50" alt="" />
                </div>
            </div>
            <div className="overflow-x-auto w-full pb-3">
                <div className="inline-flex gap-2" >
                    {products.map((product, index) => (
                        <div className="flex flex-wrap justify-center text-center">
                            <div className="relative w-90 h-90 flex items-center rounded-tl-lg rounded-tr-lg ">
                                <div className="absolute left-0 top-0 rounded-br-lg rounded-tl-lg bg-red px-1 text-10 text-white">-{product.discount_percentage}%</div>

                                <img src={product.image_link} className="w-full rounded-tl-lg rounded-tr-lg" />
                            </div>
                            <div className="w-full text-14 font-semibold text-inkdark"> {product.current_price.toLocaleString("vi-VN")} ₫</div>
                            <del className="text-10 text-ink">{product.current_price.toLocaleString("vi-VN")} ₫</del>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}