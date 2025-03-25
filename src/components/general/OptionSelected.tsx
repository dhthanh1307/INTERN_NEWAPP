import classNames from "classnames";
import React from "react";

export const OptionSelected = ({ children, isSelected, onClick }: { children: React.ReactNode; isSelected: boolean; onClick: () => void }) => {
    return (
        <div 
            onClick={onClick}
            className={classNames("text-ink relative text-nowrap w-fit bg-cloud text-12 rounded-md px-2 py-1 cursor-pointer",
                { "bg-productlight text-normal": isSelected }
            )}
        >
            <div>{children}</div>
            {isSelected && (
                <img src="/images/general/option_checked.png" className="size-3 absolute top-0 left-0 rounded-tl-md" />
            )}
        </div>
    );
};