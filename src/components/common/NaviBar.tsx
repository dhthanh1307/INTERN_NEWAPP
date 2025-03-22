import { FC } from "react";

const items = [
    { image: "/images/tabbar/home.png", name: "Trang chủ" },
    { image: "/images/tabbar/category.png", name: "Danh mục" },
    { image: "/images/tabbar/order.png", name: "Đơn hàng" },
    { image: "/images/tabbar/notification.png", name: "Thông báo" },
    { image: "/images/tabbar/profile.png", name: "Tôi" }
]
export const NaviBar: FC = () => {

    return (
        <div className="fixed bottom-0 flex w-full items-center gap-2 bg-white pb-8">
            <div className="flex w-full justify-between bg-white px-4 py-3 text-ink">
                {items.map((item, index) => (
                    <div key={index} className="flex w-full flex-wrap justify-center text-12">
                        <div className="flex w-full justify-center"><img src={item.image} className="size-6" /></div>
                        <span className="mx-1 w-12 truncate text-center">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}