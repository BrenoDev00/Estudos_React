import { Alert } from "@mui/material";
import { useState, useEffect } from "react";

export const AlertComponent = () => {
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsSuccessAlertOpen(true), 3000);
  }, []);

  return (
    <>
      {isSuccessAlertOpen && (
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setIsSuccessAlertOpen(false)}
        >
          Alert de sucesso
        </Alert>
      )}

      <Alert severity="error" variant="outlined">
        Alert de error
      </Alert>
    </>
  );
};
