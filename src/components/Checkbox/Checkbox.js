import { useState } from "react";

function Checkbox({ text, setValue }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="mt-20-0 flex items-center">
      <div
        className="input-wrapper h-20-0 w-20-0 rounded bg-gradient-to-tr from-[#D3DAE8] to-[#A7B7D8] p-2-0"
        onClick={() => {
          setIsChecked(!isChecked);
          setValue(!isChecked);
        }}
      >
        <div className="flex h-16-0 cursor-pointer items-center justify-center rounded bg-white">
          <svg
            width="14"
            height="10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.744 9.804a.75.75 0 0 0 1.012 0l8.039-7.697a.674.674 0 0 0 0-.968L12.81.196a.715.715 0 0 0-.984 0L5.264 6.48l-3.09-2.932a.715.715 0 0 0-.985 0l-.984.943a.674.674 0 0 0 0 .968l4.54 4.346Z"
              fill={isChecked ? "#111317" : "#none"}
            />
          </svg>
        </div>
        <div className="flex rounded bg-white"></div>
      </div>
      <span className="ml-10-0 text-14-0">{text}</span>
    </div>
  );
}

export default Checkbox;
