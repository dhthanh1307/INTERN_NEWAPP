import { FC } from "react";

import { Carousel } from "@/components";

const items = [
    { image: "/images/home/order.png", name: "Đơn hàng" },
    { image: "/images/home/voucher.png", name: "Voucher" },
    { image: "/images/home/location.png", name: "TP. Hồ Chí Minh" },
    { image: "/images/home/faq.png", name: "Trợ giúp" },
    { image: "/images/home/policy.png", name: "Chính sách" }
]

const slides = [
    "https://s3-alpha-sig.figma.com/img/790c/1694/0303e954c1b2aa352ab39ed89e6d0b6a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c4w3eKuwfgnKHfFCZdXf3CGImuIbkdxpaPg2qE3g~bMCWq8t-Wf0KHD6qtO1TZPDBO3-vpoT2Me1XaKo~8CjR8EPI09Jone1HoIvXwbHCLZYMsnsy9gTFXlw~UXwuZSJjm8VUxaA2MIJhzZM-Gjw4IUINWXH0sn0H0KeSgtIlJ3t65oIkxXyp9FRfJYm6LSK4uqPY9FqdRhm~kXjX20RsIVhrrGoTDMF2n~tzOIewZLr2gqJVJ8BvbPSEskmyz1rNEbcWOGsNeEu-uTM3KdFiKyKLBrOS7Lpw1DeCE-6jMT8kMdCpBv1BO~id-sW03WzBqqQiJUuWFMvGwxRp2Zf5w__",
    "https://s3-alpha-sig.figma.com/img/790c/1694/0303e954c1b2aa352ab39ed89e6d0b6a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c4w3eKuwfgnKHfFCZdXf3CGImuIbkdxpaPg2qE3g~bMCWq8t-Wf0KHD6qtO1TZPDBO3-vpoT2Me1XaKo~8CjR8EPI09Jone1HoIvXwbHCLZYMsnsy9gTFXlw~UXwuZSJjm8VUxaA2MIJhzZM-Gjw4IUINWXH0sn0H0KeSgtIlJ3t65oIkxXyp9FRfJYm6LSK4uqPY9FqdRhm~kXjX20RsIVhrrGoTDMF2n~tzOIewZLr2gqJVJ8BvbPSEskmyz1rNEbcWOGsNeEu-uTM3KdFiKyKLBrOS7Lpw1DeCE-6jMT8kMdCpBv1BO~id-sW03WzBqqQiJUuWFMvGwxRp2Zf5w__",
    "https://s3-alpha-sig.figma.com/img/790c/1694/0303e954c1b2aa352ab39ed89e6d0b6a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c4w3eKuwfgnKHfFCZdXf3CGImuIbkdxpaPg2qE3g~bMCWq8t-Wf0KHD6qtO1TZPDBO3-vpoT2Me1XaKo~8CjR8EPI09Jone1HoIvXwbHCLZYMsnsy9gTFXlw~UXwuZSJjm8VUxaA2MIJhzZM-Gjw4IUINWXH0sn0H0KeSgtIlJ3t65oIkxXyp9FRfJYm6LSK4uqPY9FqdRhm~kXjX20RsIVhrrGoTDMF2n~tzOIewZLr2gqJVJ8BvbPSEskmyz1rNEbcWOGsNeEu-uTM3KdFiKyKLBrOS7Lpw1DeCE-6jMT8kMdCpBv1BO~id-sW03WzBqqQiJUuWFMvGwxRp2Zf5w__",
    "https://s3-alpha-sig.figma.com/img/790c/1694/0303e954c1b2aa352ab39ed89e6d0b6a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c4w3eKuwfgnKHfFCZdXf3CGImuIbkdxpaPg2qE3g~bMCWq8t-Wf0KHD6qtO1TZPDBO3-vpoT2Me1XaKo~8CjR8EPI09Jone1HoIvXwbHCLZYMsnsy9gTFXlw~UXwuZSJjm8VUxaA2MIJhzZM-Gjw4IUINWXH0sn0H0KeSgtIlJ3t65oIkxXyp9FRfJYm6LSK4uqPY9FqdRhm~kXjX20RsIVhrrGoTDMF2n~tzOIewZLr2gqJVJ8BvbPSEskmyz1rNEbcWOGsNeEu-uTM3KdFiKyKLBrOS7Lpw1DeCE-6jMT8kMdCpBv1BO~id-sW03WzBqqQiJUuWFMvGwxRp2Zf5w__",
];
export const Promotion: FC = () => {
    return (
        <div className="bg-normal  ">
            <div className="flex  justify-between rounded-tl-2xl rounded-tr-2xl bg-white p-2.5">
                {items.map((item, index) => (
                    <div key={index} className="flex w-full flex-wrap justify-center text-12">
                        <div className="flex w-full justify-center"><img src={item.image} className="size-8" /></div>
                        <span className="mx-1 w-12 truncate text-center">{item.name}</span>
                    </div>
                ))}
            </div>
            <div className="bg-white p-2.5 ">
                <Carousel slides={slides} />
            </div>
            <div className="flex bg-white px-3 text-12 text-ink ">
                <div className="flex-1 overflow-x-auto">
                    <div className="inline-flex gap-8 text-nowrap">
                        <div className="flex items-center gap-1">
                            <img src="/images/general/shield.png" className="size-4" alt="" />
                            <div>Giao siêu tốc                                </div>
                        </div>
                        <li>Miễn phí giao hàng 5km</li>
                        <li>Dễ đổi trả</li>
                    </div>
                </div>
                <img src="/images/general/arrow.png" className="size-4 opacity-50" />
            </div>
        </div>
    )
}