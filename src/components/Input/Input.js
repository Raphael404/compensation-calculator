import React, { useState } from "react";

const Input = ({ type, label, setValue, maxInputLength }) => {
  const [symbolsArr] = useState(["e", "E", "+", "-", "."]);
  return (
    <div className="mt-20-0">
      <div className="mb-5-0 text-14-0">{label}</div>
      <div className="input-wrapper rounded bg-gradient-to-tr from-[#D3DAE8] to-[#A7B7D8] p-2-0">
        <div className="flex rounded bg-white">
          <input
            className="w-full rounded pl-10-0"
            type="number"
            onInput={(e) =>
              (e.target.value = e.target.value.slice(0, maxInputLength))
            }
            onKeyDown={(e) => symbolsArr.includes(e.key) && e.preventDefault()}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></input>
          <div className="mx-10-0 my-10-0">{type}</div>
        </div>
      </div>
    </div>
  );
};

export default Input;
