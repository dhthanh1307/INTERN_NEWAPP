import { FC } from "react";

export const Header: FC = () => {
    return (
        <div className="flex items-center px-2.5 py-5 bg-normal gap-2">
            <div className="flex flex-1 items-center gap-2 px-2.5 p-1 bg-white border rounded-3xl">
                <img src="/images/HeaderSearch/search-stroke.png" className="size-5" alt="Search Icon" />
                <input type="text" placeholder="panasonic" className="w-full" />
                <img src="/images/HeaderSearch/camera-image-stroke.png" className="size-5" />
            </div>
            <img src="/images/home/icon_cart.png" className="size-8" />

            <div className="flex bg-bac rounded-3xl p-0.5 gap-1 justify-center">
                <img src="/images/general/info_circle.png" className="size-6  brightness-0 invert"/>
                <div className="border m-0.5"></div>
                <img src="/images/general/close_circle.png" className="size-6 brightness-0 invert"/>
            </div>
        </div>
    )
}