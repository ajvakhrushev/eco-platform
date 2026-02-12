import React from "react";
import Label from "./Label";
import { InputProps } from '../models/InputProps';

const Input = ({
  type,
  label,
  name,
  placeholder,
  EndIcon,
  props,
}: InputProps) => {
  return (
    <>
      <div className="relative grid">
        <Label label={label} className="mb-2" />
        {type === "text" ? (
          <input
            type={type}
            className="px-3 py-3 text-lg font-normal text-black bg-gray-400 font-urbanist placeholder:text-gray-600 placeholder:text-sm focus:outline-none"
            placeholder={placeholder}
            name={name}
            {...props}
          />
        ) : (
          <textarea
            className="px-3 py-3 text-lg font-normal text-black bg-gray-400 resize-none font-urbanist placeholder:text-gray-600 placeholder:text-sm focus:outline-none"
            placeholder={placeholder}
            name={name}
            {...props}
          />
        )}
        {EndIcon ? (
          <div className="absolute top-[50px] right-[10px]">{EndIcon}</div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Input;