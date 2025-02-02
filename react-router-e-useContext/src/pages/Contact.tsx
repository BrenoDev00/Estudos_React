import { useContext } from "react";
import { userContext } from "../contexts/userContext";

export const Contact = () => {
  const user = useContext(userContext);

  return (
    <>
      <h1>Contato</h1>

      <div>
        <p>Usuário: {user}</p>
      </div>
    </>
  );
};
