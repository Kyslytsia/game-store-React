import Carusel from "./Carusel";
import ComingSoonGames from "./ComingSoonGames";

function Main(props) {
  return (
    <>
      <Carusel />
      <ComingSoonGames getGameName={props.getGameName} />
    </>
  );
}

export default Main;
