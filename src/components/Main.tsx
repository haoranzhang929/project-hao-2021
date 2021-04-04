import { Container } from "@material-ui/core";

import ThreeMe from "./ThreeMe";

import { CustomizedSprings } from "../common/interfaces";

interface MainProps {
  handleMouseMove: ({ clientX, clientY }: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  springs: CustomizedSprings;
}

const Main = ({ handleMouseMove, springs }: MainProps) => {
  return (
    <main onMouseMove={e => handleMouseMove(e)}>
      <Container maxWidth="md" style={{ height: "90vh" }}>
        <ThreeMe springs={springs} />
      </Container>
    </main>
  );
};

export default Main;
