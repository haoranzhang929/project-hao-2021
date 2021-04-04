import { Container } from "@material-ui/core";

import ThreeComponent from "./three";

import { CustomizedSprings } from "../common/interfaces";

interface MainProps {
  handleMouseMove: ({ clientX, clientY }: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  springs: CustomizedSprings;
}

const Main = ({ handleMouseMove, springs }: MainProps) => {
  return (
    <main onMouseMove={e => handleMouseMove(e)}>
      <Container maxWidth="md" style={{ height: "90vh" }}>
        <ThreeComponent springs={springs} />
      </Container>
    </main>
  );
};

export default Main;
