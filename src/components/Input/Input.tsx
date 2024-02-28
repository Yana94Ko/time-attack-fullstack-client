"use client";
import { Dispatch, SetStateAction, useId } from "react";

function InputEmail({
  label,
  inputType,
  minLength,
  value,
  setValue,
}: {
  label: string;
  inputType: string;
  minLength?: number;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) {
  const id = useId();
  return (
    <>
      <label
        className=" text-gray-800 w-full text-lg font-bold px-6 py-3 rounded focus:border-black transition border-slate-300 "
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        type={inputType}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        minLength={minLength}
        className="block border w-full px-6 col-span-3"
      />
    </>
  );
}

export default InputEmail;
