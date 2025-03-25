import { ModalIntroduction } from "@/components";
import { FC, useState } from "react";

export const HeaderDetail: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center gap-2 px-4 bg-white  py-2">
            <div className="flex-1">
                <img src="/images/general/arrow_stroke.png" className="size-6" />
            </div>
            <img src="/images/general/search.png" className="size-8" />
            <img src="/images/general/share.png" className="size-8" />

            <img src="/images/general/shopping-cart-stroke.png" className="size-6" />
            <img src="/images/general/details_vertical_stroke.png" className="size-6" />

            <div className="me-2.5 flex justify-center gap-1 rounded-3xl bg-cloudlight p-0.5 ">
                <img onClick={() => setIsOpen(true)} src="/images/general/info_circle.png" className="size-6    " />
                <div className="m-0.5 border" />
                <img src="/images/general/close_circle.png" className="size-6" />
            </div>
            <ModalIntroduction isOpen={isOpen} onClose={() => setIsOpen(false)} />

        </div>
    )
}