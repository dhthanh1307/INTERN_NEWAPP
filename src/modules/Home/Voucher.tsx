import { FC } from "react";

import { Button } from "@/components";

export const Voucher: FC = () => {
    return (
        <div className="w-full">
            <div className=" flex w-full  bg-[url('/images/home/voucher_background.png')] bg-contain bg-no-repeat ">
                <div className="flex h-66 w-66 items-center justify-center rounded-bl-lg rounded-tl-lg  bg-normal/5">
                    <img src="/images/general/avatar.png " className="size-10 " alt="" />
                </div>
                <div className="flex flex-1 rounded-br-lg rounded-tr-lg bg-cloudlight px-2 py-1">
                    <div className="flex-1">
                        <div className="text-14 font-bold">Giảm 10%</div>
                        <div className="text-12">Đơn từ 1 triệu</div>
                        <div className="flex items-center gap-1 text-10">
                            <img src="/images/suggestSearch/clockIcon.png" className="size-3" alt="" />
                            <div>Hết hạn sau 10h</div>
                            <div className="text-blue">Điều kiện</div>
                        </div>
                    </div>
                    <div className="my-auto" >
                        <Button onClick={() => { }} text={"Lưu"} className={"bg-normal px-3 py-0.5 text-12 text-white"} />
                    </div>
                </div>
            </div>
        </div>
    )
}