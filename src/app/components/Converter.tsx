"use client";

import React, { useState } from "react";
import { BaseUnit, UnitSelect } from "./UnitSelect";

type Props = {
  units: BaseUnit[];
};

function Converter({ units }: Props) {
  const [valueA, setValueA] = useState<string>("");
  const [valueB, setValueB] = useState<string>("");
  const [unitA, setUnitA] = useState<BaseUnit>(units[0]);
  const [unitB, setUnitB] = useState<BaseUnit>(units[1]);

  const handleChangeA = (value: string) => {
    setValueA(value);
    const numericA = parseFloat(value) || 0;
    const inBase = unitA.toBase(numericA);
    const convertedB = unitB.fromBase(inBase);
    setValueB(convertedB ? convertedB.toFixed(2).toString() : "");
  };

  const handleChangeB = (value: string) => {
    setValueB(value);
    const numericB = parseFloat(value) || 0;
    const inBase = unitB.toBase(numericB);
    const convertedA = unitA.fromBase(inBase);
    setValueA(convertedA ? convertedA.toFixed(2).toString() : "");
  };

  const handleUnitAChange = (newUnit: BaseUnit) => {
    const oldUnitA = unitA;

    if (parseFloat(valueA) > 0) {
      const numericA = parseFloat(valueA) || 0;
      const inBase = oldUnitA.toBase(numericA);
      const newValueA = newUnit.fromBase(inBase);
      setValueA(newValueA.toFixed(2));
    } else {
      setValueA("");
    }

    setUnitA(newUnit);
  };

  const handleUnitBChange = (newUnit: BaseUnit) => {
    const oldUnitB = unitB;

    if (parseFloat(valueB) > 0) {
      const numericB = parseFloat(valueB) || 0;
      const inBase = oldUnitB.toBase(numericB);
      const newValueB = newUnit.fromBase(inBase);
      setValueB(newValueB.toFixed(2));
    } else {
      setValueB("");
    }

    setUnitB(newUnit);
  };

  return (
    <div className="w-full max-w-fit mx-auto p-6 bg-white rounded-md shadow-sm">
      <h1 className="text-xl font-bold mb-4">Length Converter</h1>

      <div className="flex gap-3">
        <div className="flex items-center gap-2 mb-4">
          <UnitSelect
            units={units.filter((unit) => unit !== unitB)}
            selectedUnit={unitA}
            onChangeUnit={handleUnitAChange}
          />

          <input
            type="number"
            className="flex-1 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter value"
            value={valueA}
            onChange={(e) => handleChangeA(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2 mb-4">
          <input
            type="number"
            className="flex-1 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter value"
            value={valueB}
            onChange={(e) => handleChangeB(e.target.value)}
          />
          <UnitSelect
            units={units.filter((unit) => unit !== unitA)}
            selectedUnit={unitB}
            onChangeUnit={handleUnitBChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Converter;
