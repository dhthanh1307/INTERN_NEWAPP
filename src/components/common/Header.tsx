import { FC, useState } from "react";

import { ModalIntroduction } from "..";

export const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center gap-2 bg-normal px-2.5 py-5">
            <div className="flex flex-1 items-center gap-2 rounded-3xl border bg-white p-1 px-2.5">
                <img src="/images/HeaderSearch/search-stroke.png" className="size-5" alt="Search Icon" />
                <input type="text" placeholder="panasonic" className="w-full" />
                <img src="/images/HeaderSearch/camera-image-stroke.png" className="size-5" />
            </div>
            <img src="/images/home/icon_cart.png" className="size-8" />

            <div className="flex justify-center gap-1 rounded-3xl bg-bac p-0.5">
                <img onClick={() => setIsOpen(true)} src="/images/general/info_circle.png" className="size-6  brightness-0 invert" />
                <div className="m-0.5 border" />
                <img src="/images/general/close_circle.png" className="size-6 brightness-0 invert" />
            </div>
            <ModalIntroduction isOpen={isOpen} onClose={() => setIsOpen(false)} />

        </div>
    )
}