import React, { MouseEventHandler } from "react";

interface IButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ label, onClick }: IButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
