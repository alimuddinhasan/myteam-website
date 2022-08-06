import React, { MouseEventHandler } from "react";

export enum ButtonColor {
  primary,
  secondary,
}

interface IButtonProps {
  label: string;
  color?: ButtonColor;
  isDisabled?: Boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  label,
  color = ButtonColor.primary,
  isDisabled,
  onClick,
}: IButtonProps) {
  const generateButtonColorClasses = () => {
    if (color === ButtonColor.primary) {
      return "text-white enabled:hover:text-midnight-green enabled:hover:bg-white";
    }
    return "text-midnight-green bg-white enabled:hover:text-midnight-green enabled:hover:bg-rapture-blue enabled:hover:border-rapture-blue";
  };

  return (
    <button
      className={`${generateButtonColorClasses()} disabled:opacity-50 text-lg font-semibold lowercase border-2 p-3 rounded-l-full rounded-r-full`}
      onClick={onClick}
      disabled={!!isDisabled}
    >
      {label}
    </button>
  );
}
