"use client";
import Image from "next/image";
import Typography from "../_components/common/Typography";
import TextField from "../_components/common/TextField";
import Button from "../_components/common/Button";
import { useMemo, useState } from "react";

export default function BmiCalculator() {
  const [weight, setWeight] = useState<number>(0);
  const [height, seHeight] = useState<number>(0);
  const [bmi, setBmi] = useState<number>(0);

  const bmiMemo = useMemo(() => {
    if (!bmi) {
      return "Your BMI is None.";
    }

    if (bmi < 18.0) {
      return <span className=" text-cyan-500">You are underweight.</span>;
    }
    if (bmi >= 18 && bmi <= 22.9) {
      return "You are healthy weight.";
    }
    if (bmi >= 23.0 && bmi <= 24.9) {
      return <span className="text-yellow-500">You are over weight.</span>;
    }
    if (bmi >= 30.0 && bmi <= 34.9) {
      return <span className="text-orange-500">You are obese.</span>;
    }

    return <span className="text-red-500">You are extremely obese.</span>;
  }, [bmi]);

  const calculateBMI = (weight: number, height: number) => {
    const calculate = (703 * (weight / Math.pow(height, 2))).toFixed(2);
    setBmi(Number(calculate));
  };
  return (
    <div>
      <Typography element="h1">BMI CALCULATOR</Typography>
      <p className="text-sm !leading-7 mt-5">
        The BMI chart or calculating BMI is an easy way to measure a person’s
        weight in relation to their height and understand whether that person
        has a normal healthy weight, is underweight, or is over-weight or obese.
        <br></br><br></br>
        The BMI chart is an indicator of your overall health
      </p>
      <div className="mt-5">
        <Image
          sizes="100vw"
          alt="bmi-chart"
          src={"/tool/bmi-chart.jpg"}
          width={0}
          height={0}
          style={{ width: "100%" }}
        ></Image>
      </div>
      <div className="space-y-5 mt-5">
        <TextField
          onChange={(event) => {
            setWeight(Number(event.target.value));
          }}
          placeholder="Enter your weight in Pounds"
          type="number"
        />
        <TextField
          onChange={(event) => {
            seHeight(Number(event.target.value));
          }}
          placeholder="Enter your height in Inches"
          type="number"
        />
        <div className="flex justify-between items-center">
          <Button
            onClick={() => {
              calculateBMI(weight, height);
            }}
          >
            Calculate
          </Button>
          <p className="text-green-500">{bmiMemo}</p>
        </div>
      </div>
    </div>
  );
}
