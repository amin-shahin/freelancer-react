import { BeatLoader } from "react-spinners";
function Loader({ height = 40, width = 80 }) {
  return (
    <BeatLoader
      height={height}
      width={width}
      color="var(--color-primary-900)"
      speedMultiplier={0.6}
    />
  );
}

export default Loader;
