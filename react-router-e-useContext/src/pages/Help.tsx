import { useContext } from "react";
import { userContext } from "../contexts/userContext";

export const Help = () => {
  const user = useContext(userContext);

  return (
    <>
      <h1>Ajuda</h1>

      <div>
        <p>Usuário: {user}</p>
      </div>
    </>
  );
};
