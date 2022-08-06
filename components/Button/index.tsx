import React, { MouseEventHandler } from "react";

export enum ButtonColor {
  primary,
  secondary,
}

interface IButtonProps {
  label: string;
  color?: ButtonColor;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  label,
  color = ButtonColor.primary,
  onClick,
}: IButtonProps) {
  const generateButtonColorClasses = () => {
    if (color === ButtonColor.primary) {
      return "text-white hover:text-midnight-green hover:bg-white";
    } else {
      return "text-midnight-green bg-white hover:text-midnight-green hover:bg-rapture-blue hover:border-rapture-blue";
    }
  };

  return (
    <button
      className={`${generateButtonColorClasses()} text-lg font-semibold lowercase border-2 p-3 rounded-l-full rounded-r-full`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
