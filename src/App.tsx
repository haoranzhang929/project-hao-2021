import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./components/Header";
import Main from "./components/Main";
import { useSpring } from "react-spring/three";

const App = () => {
  const [springs, api] = useSpring(() => ({
    pos: [0, 0, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 }
  }));

  const handleMouseMove = ({ clientX, clientY }: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = -(clientY / window.innerHeight) * 2 + 1;
    api.start({
      pos: [x, 0, 0],
      scale: [1 + y * 0.2, 1 + y * 0.2, 1]
    });
  };
  return (
    <>
      <CssBaseline />
      <Header />
      <Main handleMouseMove={handleMouseMove} springs={springs} />
    </>
  );
};

export default App;
