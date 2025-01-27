import React from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export interface BaseUnit {
  label: string;
  value: string;
  toBase: (input: number) => number;
  fromBase: (input: number) => number;
}

export interface UnitSelectProps<T extends BaseUnit> {
  units: T[];
  selectedUnit: T;
  onChangeUnit: (newUnit: T) => void;
  triggerClassName?: string;
}

export function UnitSelect<T extends BaseUnit>({
  units,
  selectedUnit,
  onChangeUnit,
  triggerClassName,
}: UnitSelectProps<T>) {
  return (
    <Select.Root
      value={selectedUnit.value}
      onValueChange={(val) => {
        const newUnit = units.find((u) => u.value === val);
        if (newUnit) onChangeUnit(newUnit);
      }}
    >
      <Select.Trigger
        className={`
            inline-flex items-center justify-between
            px-3 py-2 border border-gray-300
            rounded-md bg-white text-gray-700
            hover:bg-gray-50 focus:outline-none
            focus:ring-2 focus:ring-blue-500
            ${triggerClassName ?? "min-w-40"} 
          `}
      >
        <Select.Value aria-label={selectedUnit.value}>{selectedUnit.label}</Select.Value>
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className="
              bg-white rounded-md shadow-lg 
              border border-gray-200
            "
        >
          <Select.Viewport className="p-2">
            {units.map((unit) => (
              <Select.Item
                key={unit.value}
                value={unit.value}
                className="
                    cursor-pointer select-none px-3 py-2 
                    rounded-md text-sm text-gray-700
                    hover:bg-blue-100
                    radix-state-checked:bg-blue-200
                  "
              >
                <Select.ItemText>{unit.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
