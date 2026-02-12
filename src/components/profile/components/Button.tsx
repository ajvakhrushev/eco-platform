import React from "react";
import { ButtonProps } from '../models/ButtonProps';

const Button = ({
  type = "button",
  label,
  customClass = "",
  isLoading = false,
  isValid = true,
  onClick,
}: ButtonProps) => {
  const invalidStyles = !isValid
    ? "user-select-none pointer-events-none opacity-50"
    : "";
  return (
    <button
      type={type}
      className={`w-fit px-4 py-2 bg-gradient-to-br from-[#414593] via-[#00022E] to-transparent text-white text-lg font-urbanist font-bold ${customClass} ${invalidStyles}`}
      disabled={!isValid}
      {...(onClick ? { onClick } : {})}
    >
      {label}
    </button>
  );
};

export default Button;