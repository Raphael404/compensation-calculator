import React, { useState } from "react";
import { Input } from "../Input";
import { Checkbox } from "../Checkbox";
import { Button } from "../Button";
import { CompensationBox } from "../CompensationBox";

const Calculator = () => {
  const [inputDays, setInputDays] = useState(0);
  const [inputAverage, setInputAverage] = useState(0);
  const [isTubs, setIsTubs] = useState(false);

  const [companyPays, setCompanyPays] = useState(0);
  const [insurancePays, setInsurancePays] = useState(0);
  const [total, setTotal] = useState(0);
  const [companyDays, setCompanyDays] = useState(0);
  const [insuranceDays, setInsuranceDays] = useState(0);

  const PERCENTAGE = 0.7;
  const DAYS = getWorkingDaysInMonth();

  const calculate = (inputDays, inputAverage, isTubs) => {
    if (inputDays < 4) {
      return;
    } else {
      inputDays -= 3;
    }
    let averageDailyIncome = (inputAverage / DAYS) * PERCENTAGE;
    let companyDays = inputDays > 5 ? 5 : inputDays;
    let insuranceDays = inputDays - companyDays;

    if (isTubs) {
      insuranceDays =
        insuranceDays >= 240 ? (insuranceDays = 240) : insuranceDays;
    } else {
      insuranceDays =
        insuranceDays >= 182 ? (insuranceDays = 182) : insuranceDays;
    }

    setInsuranceDays(insuranceDays);
    setCompanyDays(companyDays);
    setCompanyPays(companyDays * averageDailyIncome);
    setInsurancePays(insuranceDays * averageDailyIncome);
    setTotal(
      companyDays * averageDailyIncome + insuranceDays * averageDailyIncome
    );
  };

  function getWorkingDaysInMonth() {
    let d = new Date();
    let year = d.getYear() + 1900;
    let month = d.getMonth();
    let total = 0;
    for (let day = 1; day <= 31; day++) {
      let t = new Date(year, month, day);
      if (t.getMonth() > month) break;
      if (t.getDay() === 0 || t.getDay() === 6) continue;
      total++;
    }
    return total;
  }

  return (
    <div className="calculator-wrapper max-h-[800px] max-w-[340px] bg-white pt-40-0 lg:mt-40-0">
      <div className="pl-20-0 pr-20-0">
        <h4 className="text-24-0 font-bold text-metal-dark">
          Compensation Calculator
        </h4>
        <Input
          setValue={(e) => setInputAverage(e)}
          maxInputLength={9}
          label="Average Income"
          type="&euro;"
        />
        <Input
          setValue={(e) => setInputDays(e)}
          maxInputLength={9}
          label="Days on sick-leave"
          type="days"
        />
        <Checkbox setValue={(e) => setIsTubs(e)} text="I have tubercolosis" />
        <div
          onClick={() => {
            calculate(inputDays, inputAverage, isTubs);
            if (!inputAverage && !inputDays) {
              window.alert("Enter Your Average Income And Days On Sick-Leave!");
            } else if (!inputAverage) {
              window.alert("Enter Your Average Income!");
            } else if (!inputDays) {
              window.alert("Enter Your Days On Sick-Leave!");
            }
          }}
        >
          <Button text="Calculate" />
        </div>
      </div>
      <div className="mt-20-0 flex justify-center border-t-[1px] border-b-[1px] border-metal-light pt-20-0 pb-20-0">
        <CompensationBox days={companyDays} pays={companyPays} isEmployer />
        <CompensationBox days={insuranceDays} pays={insurancePays} />
      </div>
      <div className="flex flex-col items-center pb-40-0 pt-20-0">
        <div className="font-14-0">{`Compensation total for ${
          companyDays + insuranceDays
        } days (net)`}</div>
        <div className="text-24-0 font-bold">
          {(Math.round(100 * total) / 100).toFixed(2)}&euro;
        </div>
      </div>
    </div>
  );
};

export default Calculator;
