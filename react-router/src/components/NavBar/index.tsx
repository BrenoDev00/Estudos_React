import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <nav>
        <div>
          <Link to={"/"}>Logo Aqui</Link>
        </div>

        <ul>
          <li>
            <Link
              to={"/products"}
              className={`${pathname === "/products" ? "border-bottom" : ""}`}
            >
              Produtos
            </Link>
          </li>

          <li>
            <Link
              to={"/contact"}
              className={`${pathname === "/contact" ? "border-bottom" : ""}`}
            >
              Contato
            </Link>
          </li>

          <li>
            <Link
              to={"/help"}
              className={`${pathname === "/help" ? "border-bottom" : ""}`}
            >
              Ajuda
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
