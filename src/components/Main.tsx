import { Container } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import ThreeComponent from "./three";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: "90vh"
    }
  })
);

const Main = () => {
  const { container } = useStyles();

  return (
    <main>
      <Container maxWidth="md" className={container}>
        <ThreeComponent />
      </Container>
    </main>
  );
};

export default Main;
