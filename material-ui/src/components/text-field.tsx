import { TextField } from "@mui/material";
import { useState } from "react";

export const TextFieldComponent = () => {
  const [userName, setUserName] = useState<string>("");

  return (
    <>
      <h2>Textfield</h2>

      <TextField
        id="id-tal"
        label="Nome de usuário"
        variant="filled"
        value={userName}
        onChange={(event) => setUserName(event.currentTarget.value)}
      />

      {userName && <output>your name: {userName}</output>}
    </>
  );
};
