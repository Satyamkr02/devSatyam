import React from "react";
import { Text, TextProps } from "react-native";

interface H1Props extends TextProps {
  className?: string;
}

export const H1: React.FC<H1Props> = ({
  className = "",
  style,
  children,
  ...props
}) => {
  let fontClass = "font-heading";

  if (className.includes("font-light")) fontClass = "font-heading-light";
  if (className.includes("font-bold")) fontClass = "font-heading-bold";
  if (className.includes("font-semibold")) fontClass = "font-heading-semibold";

  const cleanClass = className
    .replace("font-light", "")
    .replace("font-bold", "")
    .replace("font-semibold", "");

  return (
    <Text className={`${fontClass} ${cleanClass}`} style={style} {...props}>
      {children}
    </Text>
  );
};