import React from "react";
import { TextInput, TextInputProps } from "react-native";

interface FormInputProps extends TextInputProps {
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  className = "",
  style,
  ...props
}) => {
  let fontClass = "font-body";

  if (className.includes("font-light")) fontClass = "font-body-light";
  if (className.includes("font-bold")) fontClass = "font-body-bold";
  if (className.includes("font-semibold")) fontClass = "font-body-semibold";

  const cleanClass = className
    .replace("font-light", "")
    .replace("font-bold", "")
    .replace("font-semibold", "")
    .replace("font-normal", "");

  return (
    <TextInput
      className={`${fontClass} ${cleanClass}`}
      style={style}
      {...props}
    />
  );
};

export default FormInput;