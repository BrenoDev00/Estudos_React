import { useState, useEffect } from "react";
import Button from "../Button";
import { Watch } from "./Watch";
import { TimerInterface } from "../../types/components/Timer.type";
import { timeToSeconds } from "../../common/utils/time";

export function Timer({ selected }: TimerInterface) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-white text-xl">
        Escolha um card e inicie o cronômetro
      </p>

      {time && <p className="text-white text-xl">Tempo: {time}</p>}

      <div>
        <Watch />
      </div>
      <Button text="Começar" />
    </div>
  );
}
