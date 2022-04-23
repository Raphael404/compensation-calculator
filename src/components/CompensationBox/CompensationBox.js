import React from "react";

const CompensationBox = ({ isEmployer, days, pays }) => {
  const detectCompensator = () => {
    if (isEmployer) return "The employer compensates";
    else return "Health Insurance compensates";
  };

  return (
    <div className="mr-20-0 ml-20-0 flex flex-col">
      <div className="flex w-130-0 flex-col text-center text-14-0">
        <span>{detectCompensator()}</span>
        <span className="font-bold">{`${days} days`}</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-18-0 font-bold">
          {(Math.round(100 * pays) / 100).toFixed(2)}&euro;
        </div>
        <div className="flex flex-col items-center text-12-0 text-metal-middle">
          <div>Daily allowance</div>
          <div>
            {days ? (Math.round(100 * (pays / days)) / 100).toFixed(2) : 0}
            &euro;
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompensationBox;
