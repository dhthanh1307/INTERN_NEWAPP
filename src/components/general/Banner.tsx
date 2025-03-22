import classNames from "classnames";
import React, { FC } from "react";
interface BannerProps {
    src: string[];
    className?: string;
    containerClassName?: string;
}
export const Banner: FC<BannerProps> = ({ src, className = "", containerClassName = "" }) => {
    return (
        <div className={classNames("bg-white", containerClassName)}>
            <div className="flex w-full flex-wrap justify-center gap-3">
                {src.map((image, index) => (
                    <img key={index} src={image} className={className} alt={`banner-${index}`} />
                ))}
            </div>
        </div>
    );
};
