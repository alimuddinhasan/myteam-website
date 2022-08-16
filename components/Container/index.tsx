import React, { ReactNode } from "react";

interface IContainerProps {
  children?: ReactNode | undefined;
}

export default function Container({ children }: IContainerProps) {
  return <div className="max-w-6xl w-screen">{children}</div>;
}
