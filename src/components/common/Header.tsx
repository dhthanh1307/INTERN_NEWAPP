import { FC, useEffect, useState } from "react";

import { ModalIntroduction } from "..";
import products from "../../mock/product.json"
import { Product } from "@/types";
import { useRouter } from "next/navigation";
export const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const router = useRouter();
    useEffect(() => {
        if (keyword.trim() !== "") {
            const results = products.filter((product) =>
                product.name.toLowerCase().includes(keyword.toLowerCase())
            );

            setFilteredProducts(results);
        } else {
            setFilteredProducts([]);
        }
    }, [keyword]);
    const handleSearch = () => {
        if (keyword.trim() !== "") {
            router.push(`/search?query=${encodeURIComponent(keyword)}`);
        }
    };
    return (
        <div className="flex items-center gap-2   py-5">
            <div className="flex flex-1 items-center ms-2.5 gap-2 rounded-3xl border bg-white p-1 px-2.5  ">
                <img src="/images/HeaderSearch/search-stroke.png" onClick={() => handleSearch()} className="size-5" alt="Search Icon" />
                <input type="text" placeholder="panasonic" className="w-full focus:outline-none" value={keyword} onChange={(e) => setKeyword(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 0)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()} />
                <img src="/images/HeaderSearch/camera-image-stroke.png" className="size-5" />
            </div>
            <img src="/images/home/icon_cart.png" className="size-8" />

            <div className="flex justify-center gap-1 rounded-3xl bg-bac p-0.5 me-2.5">
                <img onClick={() => setIsOpen(true)} src="/images/general/info_circle.png" className="size-6  brightness-0 invert" />
                <div className="m-0.5 border" />
                <img src="/images/general/close_circle.png" className="size-6 brightness-0 invert" />
            </div>
            <ModalIntroduction isOpen={isOpen} onClose={() => setIsOpen(false)} />
            {isFocused && filteredProducts.length > 0 && (
                <div className="bg-cloudlight text-inkdark z-50 absolute top-16 text-12 h-450 w-full overflow-y-auto ">
                    <div className="w-full bg-white ">
                        {filteredProducts.slice(0, 2).map((product, index) => (
                            <div key={index} className="ms-1 border-b p-2 flex justify-between">
                                <div className="flex items-center gap-1">
                                    <img src="/images/suggestSearch/clockIcon.png" className="size-4" />
                                    <span className="">{product.name}</span>
                                </div>
                                <img src="images/general/close_icon.png" className="size-4" />
                            </div>
                        ))}
                    </div>
                    <div className="w-full bg-white mt-2 px-2.5 py-4 ">
                        <div className="font-bold ">Gợi ý tìm kiếm</div>
                        <div className="w-full bg-white ">
                            {filteredProducts.slice(0, 4).map((product, index) => (
                                <div key={index} className="border-b py-2 flex justify-between">
                                    <div className="flex items-center gap-1">
                                        <img src="/images/suggestSearch/trendingIcon.png" className="size-4" />
                                        <span className="">{product.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full bg-white mt-2 px-2.5 py-4 flex flex-wrap">
                        <div className="font-bold w-full">Chương trình HOT</div>
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="w-1/2 p-0.5">
                                <div className="flex gap-1 bg-cloudlight p-1 rounded-sm">
                                    <img
                                        className="size-10 rounded-lg"
                                        src="https://s3-alpha-sig.figma.com/img/92cd/932e/8bfc07992fab0347e986d445bedaa7c7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kAkbmTLueiClT2bnRHtqgfA0cOSFE5ehXNpIDuINgS6iV-UvMANJ-fS9PUeuB4KczggPuNSfg8sfKW1gM9MBhqEKcrkVqD8r-WZ6Se6VEb3n8kJrvvtOzgS4md9uL1U8uvqofShv-kP3Rb89d14afh14mYinWvHtYtaXrTWDYRohx-L8vdlJSuL0POBpkGAatfWRNiKMntNJp7ylRXTbOKrsGN4r7x7s46aGZkV6Dx8Z6U6L7oC5mPFtAOFk0OljRpkxghKxYtudMLTa1jLp5C5FmsLN3AzIPzj83f2UywPaOswPNYL3EASczLEqWlbvXpTnBMH4EqWwitHsRz5DFQ__"
                                    />
                                    <div>
                                        <div>Flash sale 30/4</div>
                                        <div className="text-inklight text-10">Giảm đến 30%</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            )}

        </div>
    )
}