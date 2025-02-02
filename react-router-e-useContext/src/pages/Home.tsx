import { useContext } from "react";
import { userContext } from "../contexts/userContext";

export const Home = () => {
  const user = useContext(userContext);

  return (
    <>
      <h1>Página inicial do site</h1>

      <div>
        <p>Usuário: {user}</p>
      </div>
    </>
  );
};
