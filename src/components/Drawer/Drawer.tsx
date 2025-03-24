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
            <div className="absolute bottom-0 left-0 right-0  z-[100] h-28 w-full px-2.5 ">
                <img
                    onClick={onClose}
                    className="size-8 cursor-pointer brightness-50 invert"
                    src="/images/general/double_down_chevron_stroke.png"
                    alt="Close"
                />
            </div>

            <hr />
            {children}
        </div>
    );
};
