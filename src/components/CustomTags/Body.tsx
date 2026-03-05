import React from "react";
import { Text, TextProps } from "react-native";

interface BodyProps extends TextProps {
  className?: string;
}

export const Body: React.FC<BodyProps> = ({
  className = "",
  style,
  children,
  ...props
}) => {
  let fontClass = "font-body";

  if (className.includes("font-light")) fontClass = "font-body-light";
  if (className.includes("font-bold")) fontClass = "font-body-bold";
  if (className.includes("font-semibold")) fontClass = "font-body-semibold";

  // remove tailwind weight classes to prevent conflict
  const cleanClass = className
    .replace("font-light", "")
    .replace("font-bold", "")
    .replace("font-semibold", "")
    .replace("font-normal", "");

  return (
    <Text className={`${fontClass} ${cleanClass}`} style={style} {...props}>
      {children}
    </Text>
  );
};