"use client";

import Converter from "../components/Converter";
import { BaseUnit } from "../components/UnitSelect";

const lengthUnits: BaseUnit[] = [
  {
    label: "Meters",
    value: "m",
    toBase: (input: number) => input, // already in meters
    fromBase: (input: number) => input, // already in meters
  },
  {
    label: "Feet",
    value: "ft",
    toBase: (input: number) => input * 0.3048,
    fromBase: (input: number) => input / 0.3048,
  },
  {
    label: "Centimeters",
    value: "cm",
    toBase: (input: number) => input * 0.01,
    fromBase: (input: number) => input / 0.01,
  },
  {
    label: "Millimeters",
    value: "mm",
    toBase: (input: number) => input * 0.001,
    fromBase: (input: number) => input / 0.001,
  },
  {
    label: "Inches",
    value: "in",
    toBase: (input: number) => input * 0.0254,
    fromBase: (input: number) => input / 0.0254,
  },
  {
    label: "Yards",
    value: "yd",
    toBase: (input: number) => input * 0.9144,
    fromBase: (input: number) => input / 0.9144,
  },
  {
    label: "Kilometers",
    value: "km",
    toBase: (input: number) => input * 1000,
    fromBase: (input: number) => input / 1000,
  },
  {
    label: "Miles",
    value: "mi",
    toBase: (input: number) => input * 1609.34,
    fromBase: (input: number) => input / 1609.34,
  },
];

const weightUnits: BaseUnit[] = [
  {
    label: "Kilograms",
    value: "kg",
    toBase: (input: number) => input, // already in kg
    fromBase: (input: number) => input, // already in kg
  },
  {
    label: "Pounds",
    value: "lb",
    toBase: (input: number) => input * 0.45359237,
    fromBase: (input: number) => input / 0.45359237,
  },
  {
    label: "Grams",
    value: "g",
    toBase: (input: number) => input * 0.001,
    fromBase: (input: number) => input / 0.001,
  },
  {
    label: "Ounces",
    value: "oz",
    toBase: (input: number) => input * 0.02834952,
    fromBase: (input: number) => input / 0.02834952,
  },
  {
    label: "Stones",
    value: "st",
    toBase: (input: number) => input * 6.35029318,
    fromBase: (input: number) => input / 6.35029318,
  },
];

const temperatureUnits: BaseUnit[] = [
  {
    label: "Celsius",
    value: "C",
    toBase: (c: number) => c + 273.15,
    fromBase: (k: number) => k - 273.15,
  },
  {
    label: "Fahrenheit",
    value: "F",
    toBase: (f: number) => ((f + 459.67) * 5) / 9,
    fromBase: (k: number) => (k * 9) / 5 - 459.67,
  },
  {
    label: "Kelvin",
    value: "K",
    toBase: (k: number) => k, // already in Kelvin
    fromBase: (k: number) => k, //  already in Kelvin
  },
];

export default function ClientConverters() {
  return (
    <div className="flex flex-col gap-4">
      <Converter units={lengthUnits} />
      <Converter units={weightUnits} />
      <Converter units={temperatureUnits} />
    </div>
  );
}
