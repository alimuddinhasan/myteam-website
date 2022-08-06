import React, { MouseEventHandler } from "react";

export enum ButtonColor {
  primary,
  secondary,
}

interface IButtonProps {
  label: string;
  color?: ButtonColor;
  isDisabled?: Boolean;
  isFlat?: Boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  label,
  color = ButtonColor.primary,
  isDisabled,
  isFlat,
  onClick,
}: IButtonProps) {
  const generateButtonColorClasses = () => {
    if (color === ButtonColor.primary) {
      return "text-white enabled:hover:text-midnight-green enabled:hover:bg-white";
    }
    return "text-midnight-green bg-white enabled:hover:text-midnight-green enabled:hover:bg-rapture-blue enabled:hover:border-rapture-blue";
  };

  const generateBorderClasses = () => {
    if (!isFlat) {
      return "border-2";
    }
    return "";
  };

  return (
    <button
      className={`${generateButtonColorClasses()} ${generateBorderClasses()} rounded-l-full rounded-r-full disabled:opacity-50 text-lg font-semibold lowercase p-3`}
      onClick={onClick}
      disabled={!!isDisabled}
    >
      {label}
    </button>
  );
}
