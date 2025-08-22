import React from "react";
import { BaseProps } from "./BaseProps";
import Builder from "./ComponentBuilder";

type ButtonProps = BaseProps & {
  label: string;
  type?: "primary" | "secondary";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  type = "primary",
  onClick,
  className,
  style,
  id,
  children,
}) => {
  return (
    <button
      id={id}
      style={style}
      className={`btn btn-${type} ${className || ""}`}
      onClick={onClick}
    >
      {label}
      {children}
    </button>
  );
};

export const ButtonBuilder = Builder.generate<ButtonProps>(Button);
