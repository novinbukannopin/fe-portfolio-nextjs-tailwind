import React from "react";

export default function Button({ className, variant, children, pill }) {
  const addClassName = className ? `${className}` : "";
  const variants = {
    "outlined-yellow": `border border-yellow-500 text-yellow-500`,
    "filled-yellow": `bg-yellow-500 text-black`,
    black: `bg-black text-white`,
  };
  const pickVariant = variants[variant];
  return (
    <a
      className={`${pickVariant} ${
        pill ? "rounded-full" : ""
      } py-2 px-6 font-semibold text-lg  inline-block ${addClassName}`}
    >
      {children}
    </a>
  );
}
