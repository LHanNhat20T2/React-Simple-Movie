import React from "react";

const Button = ({
    onClick,
    className,
    full = false,
    children,
    bgColor = "primary",
    type = "button",
}) => {
    let bgClassName = "bg-primary";
    switch (bgColor) {
        case "primary":
            bgClassName = "bg-primary";
            break;
        case "secondary":
            bgClassName = "bg-secondary";
            break;
        default:
            break;
    }
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${
                full ? "w-full" : ""
            } px-6 py-3 mt-auto capitalize rounded-lg ${bgClassName} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
