"use client";

import React, { useEffect, useState } from "react";
import Converter from "./Converter";
import { BaseUnit } from "./UnitSelect";
import SkeletonConverter from "./skeletons/SkeletonConverter";

export default function CurrencyConverter() {
  const [units, setUnits] = useState<BaseUnit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadRates() {
      try {
        setLoading(true);
        const res = await fetch("/api/exchange-rates");
        const data = await res.json();
        // data => { baseCurrency, fetchedAt, rates: {EUR: 0.93, GBP: 0.82, ...} }

        // Build "units" array from the rates object
        const keys = Object.keys(data.rates);
        const builtUnits: BaseUnit[] = keys.map((code) => {
          const rate = data.rates[code];

          return {
            label: code, // "USD", "EUR", etc.
            value: code,
            // flagUrl: `/flags/${code.toLowerCase()}.svg`, // or a different mapping
            toBase: (amt: number) => amt / rate, // code -> USD
            fromBase: (amt: number) => amt * rate, // USD -> code
          };
        });

        setUnits(builtUnits);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadRates();
  }, []);

  if (loading) {
    return <SkeletonConverter />;
  }

  if (!units.length) {
    return <p>No currency rates available.</p>;
  }

  const uah = units.find((unit) => unit.value === "UAH");
  const usd = units.find((unit) => unit.value === "USD");

  return (
    <Converter units={units} title={"Currency converter"} defaultUnitA={usd} defaultUnitB={uah} />
  );
}
