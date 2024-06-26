import { useControls } from "leva";

export default function useGuiControls() {
  const controls = useControls("Galaxy configurator", {
    count: {
      value: 20000,
      min: 1,
      max: 100000,
      step: 1,
    },
    uSize: {
      value: 20,
      min: 0.1,
      max: 50,
    },
    radius: {
      value: 5,
      min: 0.1,
      max: 30,
    },
    branches: {
      value: 3,
      min: 2,
      max: 20,
      step: 1,
    },
    randomness: {
      value: 0.2,
      min: 0,
      max: 2,
      step: 0.01,
    },
    randomnessPower: {
      value: 3,
      min: 0.1,
      max: 10,
      step: 1,
    },
    insideColor: {
      value: "#ff6030",
    },
    outsideColor: {
      value: "#5786F5",
    },
  });

  return controls;
}
