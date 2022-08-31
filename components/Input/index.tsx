import React, { ForwardedRef, forwardRef } from "react";

export enum InputType {
  Text,
  TextArea,
}

interface IInputProps {
  error?: string | undefined;
  label: string;
  type?: InputType | undefined;
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, IInputProps>(
  ({ label, type = InputType.Text, error, ...rest }, ref) => {
    const getFieldColor = () => {
      if (error) {
        return "placeholder-light-coral text-light-coral";
      }

      return "placeholder-white text-white";
    };

    const getBorderColor = () => {
      if (error) {
        return "border-light-coral";
      }

      return "border-white";
    };

    const buildInputText = () => {
      const inputRef = ref as ForwardedRef<HTMLInputElement>;
      return (
        <div className={`${getBorderColor()} h-11 border-b-2 px-3`}>
          <input
            className={`${getFieldColor()} bg-transparent placeholder-opacity-60 font-semibold text-xs outline-none w-full`}
            placeholder={label}
            type="text"
            ref={inputRef}
            {...rest}
          />
        </div>
      );
    };

    const buildInputTextarea = () => {
      const inputRef = ref as ForwardedRef<HTMLTextAreaElement>;
      return (
        <div className={`${getBorderColor()} h-24 border-b-2 px-3`}>
          <textarea
            placeholder={label}
            className={`${getFieldColor()} bg-transparent placeholder-opacity-60 font-semibold text-xs outline-none w-full`}
            ref={inputRef}
            {...rest}
          ></textarea>
        </div>
      );
    };

    if (type === InputType.Text) {
      return buildInputText();
    } else {
      return buildInputTextarea();
    }
  }
);
export default Input;
