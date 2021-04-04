import { Container } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import ThreeComponent from "./three";

import { CustomizedSprings } from "../common/interfaces";

interface MainProps {
  handleMouseMove: ({ clientX, clientY }: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  springs: CustomizedSprings;
}

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: "90vh"
    }
  })
);

const Main = ({ handleMouseMove, springs }: MainProps) => {
  const { container } = useStyles();

  return (
    <main onMouseMove={e => handleMouseMove(e)}>
      <Container maxWidth="md" className={container}>
        <ThreeComponent springs={springs} />
      </Container>
    </main>
  );
};

export default Main;
