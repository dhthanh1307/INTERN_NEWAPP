import { FC, useState } from "react";

import { Menu } from "..";

const items = [
    { image: "/images/tabbar/home.png", name: "Trang chủ" },
    { image: "/images/tabbar/category.png", name: "Danh mục" },
    { image: "/images/tabbar/order.png", name: "Đơn hàng" },
    { image: "/images/tabbar/notification.png", name: "Thông báo" },
    { image: "/images/tabbar/profile.png", name: "Tôi" }
]
export const NaviBar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-0 flex w-full items-center gap-2 bg-white pb-8">
            <div className="flex w-full justify-between bg-white px-4 py-3 text-ink">
                <div className="flex w-full flex-wrap justify-center text-10">
                    <div className="flex w-full justify-center"><img src={items[0].image} className="size-6" /></div>
                    <span className="mx-1 w-full truncate text-center ">{items[0].name}</span>
                </div>
                <div onClick={()=>setIsOpen(true)} className="flex w-full flex-wrap justify-center text-10">
                    <div className="flex w-full justify-center"><img src={items[1].image} className="size-6" /></div>
                    <span className="mx-1 w-full truncate text-center ">{items[1].name}</span>
                </div>
                <div className="flex w-full flex-wrap justify-center text-10">
                    <div className="flex w-full justify-center"><img src={items[2].image} className="size-6" /></div>
                    <span className="mx-1 w-full truncate text-center ">{items[2].name}</span>
                </div>
                <div className="flex w-full flex-wrap justify-center text-10">
                    <div className="flex w-full justify-center"><img src={items[3].image} className="size-6" /></div>
                    <span className="mx-1 w-full truncate text-center ">{items[3].name}</span>
                </div>
                <div className="flex w-full flex-wrap justify-center text-10">
                    <div className="flex w-full justify-center"><img src={items[4].image} className="size-6" /></div>
                    <span className="mx-1 w-full truncate text-center ">{items[4].name}</span>
                </div>
            </div>
            <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} />

        </div>
    )
}