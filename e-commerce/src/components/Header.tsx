import logo from "../assets/logo/hashtag.svg";
import { UserButtons } from "./UserButtons";

export const Header = () => {
  return (
    <header className="flex justify-between items-center text-xl sticky top-0 shadow-xl px-8 py-4 shadow-slate-400 bg-slate-950 text-slate-200">
      <a href="/">
        <img className="h-16 px-2" src={logo} alt="Logo da Hashtag" />
      </a>

      <div className="mr-4">
        <UserButtons />
      </div>
    </header>
  );
};
