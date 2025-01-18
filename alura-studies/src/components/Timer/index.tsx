import Button from "../Button";
import { Watch } from "./Watch";

export function Timer() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-white text-xl">
        Escolha um card e inicie o cronômetro
      </p>

      <div>
        <Watch />
      </div>

      <Button text="Começar" />
    </div>
  );
}
