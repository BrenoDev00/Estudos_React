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

  function countdown(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return countdown(counter - 1);
      }
    }, 1000);
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-white text-xl">
        Escolha um card e inicie o cronômetro
      </p>

      {time && <p className="text-white text-xl">Tempo: {time}</p>}

      <div>
        <Watch time={time} />
      </div>
      <Button onClick={() => countdown(time)} text="Começar" />
    </div>
  );
}
