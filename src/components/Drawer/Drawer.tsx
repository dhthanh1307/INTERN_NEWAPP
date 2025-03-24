import classNames from "classnames";
import React, { FC } from "react";

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Drawer: FC<DrawerProps> = ({ isOpen, onClose, children }) => {
    return (
        <div className={classNames(
            "fixed right-0 mt-16 top-0 z-50 h-full w-full bg-white transition-transform duration-500 ease-in-out",
            { "translate-y-0": isOpen, "translate-y-full": !isOpen }
        )}>
            <div className="absolute w-full h-28 px-2.5  left-0 bottom-0 right-0 z-[100] ">
                <img
                    onClick={onClose}
                    className="size-8 cursor-pointer invert brightness-50"
                    src="/images/general/double_down_chevron_stroke.png"
                    alt="Close"
                />
            </div>

            <hr />
            {children}
        </div>
    );
};
