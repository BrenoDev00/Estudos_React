import Select, { type SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

export const SelectComponent = () => {
  const [option, setOption] = useState<string>("");

  const options = [
    {
      label: "10",
      value: 10,
    },
    {
      label: "20",
      value: 20,
    },
    {
      label: "30",
      value: 30,
    },
  ];

  function handleChange(event: SelectChangeEvent): void {
    setOption(event.target.value);
  }

  return (
    <>
      <h2>Select</h2>

      <Select
        size={"medium"}
        sx={{ width: "150px" }}
        onChange={handleChange}
        value={option}
      >
        {options.map((option) => {
          return [
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>,
          ];
        })}
      </Select>
    </>
  );
};
