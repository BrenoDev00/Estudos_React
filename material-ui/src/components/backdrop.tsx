import { Backdrop, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
export const BackdropComponent = () => {
  const [backdropOpen, setBackdropOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setBackdropOpen(true)}
      >
        show backdrop
      </Button>

      <Backdrop open={backdropOpen} onClick={() => setBackdropOpen(false)}>
        <CircularProgress color="secondary" />
      </Backdrop>
    </>
  );
};
