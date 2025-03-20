import { Button, Carousel } from "@/components";
import { FC } from "react";

export const Voucher: FC = () => {
    return (
        <div className="flex ">
            <div className="bg-productlight w-66 h-66 justify-center items-center flex rounded-tl-lg  rounded-bl-lg">
                <img src="/images/general/avatar.png " className="size-10 " alt="" />
            </div>
            <div className="bg-cloudlight flex flex-1 py-1 px-2 rounded-tr-lg rounded-br-lg">
                <div className="flex-1">
                    <div className="text-14 font-bold">Giảm 10%</div>
                    <div className="text-12">Đơn từ 1 triệu</div>
                    <div className="flex text-10 gap-0.5 items-center">
                        <img src="/images/suggestSearch/clockIcon.png" className="size-3" alt="" />
                        <div>Hết hạn sau 10h</div>
                        <div className="text-blue">Điều kiện</div>
                    </div>
                </div>
                <div className="my-auto" >
                    <Button onClick={() => { }} text={"Lưu"} className={"bg-normal text-12 text-white px-3 py-0.5"} />
                </div>
            </div>
        </div>
    )
}