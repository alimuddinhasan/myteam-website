import React, { MouseEventHandler } from "react";

export enum ButtonColor {
  primary,
  secondary,
  dark
}

interface IButtonProps {
  className?: string;
  color?: ButtonColor;
  icon?: string;
  isDisabled?: Boolean;
  isFlat?: Boolean;
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  dataTestid?: string;
}

export default function Button({
  className = "",
  color = ButtonColor.primary,
  icon,
  isDisabled,
  isFlat,
  label,
  onClick,
  dataTestid,
}: IButtonProps) {
  const generateButtonColorClasses = () => {

    if (color === ButtonColor.primary) {
      let classes = "text-white enabled:hover:text-midnight-green";
      if (!icon) {
        classes += " enabled:hover:bg-white";
      }
      return classes;
    } else if (color === ButtonColor.dark) {
      return "text-dark-green bg-light-coral enabled:hover:text-light-coral border-dark-green enabled:hover:bg-dark-green enabled:hover:border-dark-green"
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
      className={`${generateButtonColorClasses()} ${generateBorderClasses()} rounded-l-full rounded-r-full disabled:opacity-50 text-lg font-semibold lowercase p-3 ${className}`}
      onClick={onClick}
      disabled={!!isDisabled}
      data-testid={dataTestid}
    >
      {icon ? <img src={icon} alt='button-icon' /> : label}
    </button>
  );
}
