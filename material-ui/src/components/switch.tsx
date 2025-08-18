import { Switch } from "@mui/material";
import { useState, type ChangeEvent } from "react";
export const SwitchComponent = () => {
  const [checked, setChecked] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setChecked(event.currentTarget.checked);
  }

  return (
    <div>
      <span>switch button</span>
      <Switch checked={checked} onChange={handleChange} />

      {checked && <p>checked</p>}
    </div>
  );
};
