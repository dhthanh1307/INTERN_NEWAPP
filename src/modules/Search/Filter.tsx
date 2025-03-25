import { FC, useState } from "react";
import classNames from "classnames";
import { ModalFilter } from "@/components";
export const Filter: FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>("Liên quan");
    const categories = ["Liên quan", "Bán chạy", "Mới nhất", "Giá"];
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mt-2.5 bg-white p-2.5">
            <div className="overflow-x-auto text-12 text-ink">
                <div className="inline-flex w-full">
                    {categories.map((category, index) => (
                        <div key={index} className={classNames("h-12 w-1/5  justify-center flex items-center text-center cursor-pointer",
                            { "border-b-2 border-normal text-normal": selectedCategory === category, })} onClick={() => setSelectedCategory(category)}>
                            <div className="truncate w-full px-0.5 mx-auto  ">{category}</div>
                        </div>
                    ))}
                    <div onClick={()=>setIsOpen(true)} className="h-12 w-1/5 flex items-center justify-center gap-1 border-">
                        <img src="/images/searchResult/iconFilter.png" className="size-5 border rounded-sm" />
                        Bộ lọc
                    </div>
                </div>
                <div className="border-t flex text-12 py-1 gap-1 items-center">
                    <img src="/images/home/map_pin.png" className="size-5 invert opacity-50" />
                    <span className="font-bold text-nowrap">Giao đến: </span>
                    <span className="truncate">Lô T2-12, Đường D1, D1 Phường Tân Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh</span>
                    <img src="/images/general/arrow.png" className="size-3 opacity-50" alt="" />
                </div>
            </div>
            <ModalFilter isOpen={isOpen} onClose={()=>setIsOpen(false)}/>
        </div>
    )
}