import React from "react";

interface ButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
    return (
        <div
            className={`rounded-lg transition-all duration-300 ${className}`}
            onClick={onClick} >
            {text}
        </div>
    );
};
