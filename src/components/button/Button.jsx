'use client'

import React from "react";

const Button = ({ children, onClick, variant = "primary", disabled = false, className = "" }) => {
    const getVariantClasses = () => {
        switch (variant) {
            case "primary":
                return "bg-primary-main text-neutral-10 hover:bg-primary-hover active:bg-primary-pressed";
            case "secondary":
                return "bg-neutral-20 text-neutral-100 hover:bg-neutral-30 active:bg-neutral-40";
            case "danger":
                return "bg-red-500 text-white hover:bg-red-600 active:bg-red-700";
            default:
                return "bg-primary-main text-neutral-10 hover:bg-primary-hover active:bg-primary-pressed";
        }
    };

    return (
        <button
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${getVariantClasses()} ${disabled ? "opacity-50 cursor-not-allowed" : ""
                } ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;