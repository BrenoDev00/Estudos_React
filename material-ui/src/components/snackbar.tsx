import { Button, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
export const SnackbarComponent = () => {
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  return (
    <>
      <h2>Snackbar component</h2>

      <Button
        variant="contained"
        color="primary"
        onClick={() => setSnackbarOpen(true)}
      >
        show snackbar
      </Button>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        action={
          <Button onClick={() => setSnackbarOpen(false)}>
            {<CloseIcon color="primary" />}
          </Button>
        }
        message={"Snackbar de sucesso!"}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </>
  );
};
