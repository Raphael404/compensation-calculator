import React from "react";

const Button = ({ text }) => {
  return (
    <div className="mt-20-0 flex">
      <div className="calculate-button flex items-center justify-center bg-gradient-to-tr from-[#911812] to-[#E1261C] text-18-0 text-white">
        {text}
      </div>
    </div>
  );
};

export default Button;
