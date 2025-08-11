import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";

export const ButtonGroups = () => {
  return (
    <div>
      <h2>ButtonGroup</h2>

      <ButtonGroup variant="contained">
        <Button>Submit</Button>
        <Button variant="outlined">Cancel</Button>
      </ButtonGroup>
    </div>
  );
};
