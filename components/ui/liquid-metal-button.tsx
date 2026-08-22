import React from "react";
import "./liquid-metal-button.css";

interface LiquidMetalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "gold" | "silver" | "dark";
  className?: string;
}

export const LiquidMetalButton: React.FC<LiquidMetalButtonProps> = ({
  children,
  variant = "gold",
  className = "",
  ...props
}) => {
  return (
    <button className={`liquid-metal-btn liquid-metal-${variant} ${className}`} {...props}>
      <span className="liquid-metal-inner">{children}</span>
      <span className="liquid-metal-glare" />
    </button>
  );
};

export default LiquidMetalButton;
