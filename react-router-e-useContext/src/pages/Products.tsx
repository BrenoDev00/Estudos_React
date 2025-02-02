import { useContext } from "react";
import { userContext } from "../contexts/userContext";

export const Products = () => {
  const user = useContext(userContext);

  return (
    <>
      <h1>Produtos</h1>

      <div>
        <p>Usuário: {user}</p>
      </div>
    </>
  );
};
