import { Box } from "./Header";

export const Dots = ({ state }: Box) => {
  return (
    <div className="flex gap-1">
      <span
        className={`${
          state.clicked ? "border-white" : "border-black"
        } rounded-full w-2 h-2 border-2 animate-bounce_slow`}
      ></span>
      <span
        className={`${
          state.clicked ? "border-white" : "border-black"
        } rounded-full w-2 h-2 border-2 animate-bounce_slow`}
      ></span>
      <span
        className={`${
          state.clicked ? "border-white" : "border-black"
        } rounded-full w-2 h-2 border-2 animate-bounce_slow`}
      ></span>
    </div>
  );
};
