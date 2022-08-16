import React, { ReactNode } from "react";

interface IContainerProps {
  children?: ReactNode | undefined;
  className?: string | undefined;
}

export default function Container({ children, className }: IContainerProps) {
  return (
    <div className={`${className || ""} max-w-6xl w-screen`}>{children}</div>
  );
}
