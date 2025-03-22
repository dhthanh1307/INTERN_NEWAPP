import classNames from "classnames";
import React, { FC, ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    header: ReactNode; 
    children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, header, children }) => {
    return (
        <div className={classNames(
            "fixed bottom-0 left-0 right-0 z-50  transition-transform duration-300 ease-in-out rounded-tl-2xl rounded-tr-2xl bg-white" ,
            { "translate-y-0": isOpen, "translate-y-full": !isOpen })}>
            <div className="flex items-center justify-between px-2 ">
                {header}
                <img onClick={onClose} className="size-6 cursor-pointer" src="/images/general/close_icon.png" />
            </div>
            <hr />
            {children}
        </div>
    );
};
