import { WatchInterface } from "../../../types/components/Watch.type";

export function Watch({ time = 0 }: WatchInterface) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteDozen, minuteUnit] = String(minutes).padStart(2, "0");
  const [secondDozen, secondUnit] = String(seconds).padStart(2, "0");

  return (
    <div className="text-white bg-slate-600 p-4 rounded-md text-2xl text-center flex gap-1 justify-center">
      <span className="p-1 rounded-md bg-slate-800">{minuteDozen}</span>
      <span className="p-1 rounded-md bg-slate-800">{minuteUnit}</span>
      <span className="px-1">:</span>
      <span className="p-1 rounded-md bg-slate-800">{secondDozen}</span>
      <span className="p-1 rounded-md bg-slate-800">{secondUnit}</span>
    </div>
  );
}
