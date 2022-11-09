import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function AllGames(props) {
  const games = useSelector((state) => state.games.value);
  return (
    <div>
      <Link className="link" to="/game-info">
        <div className="soon-games-block">
          {games.map((el) => {
            if (el.release === "released") {
              return (
                <div
                  onClick={() => props.getGameName(el.name)}
                  style={{ backgroundImage: el.imgS }}
                  className="game-card"
                  key={el.name}
                >
                  <img className="game-img" src={el.imgS} alt={el.name}></img>

                  <span className="game-name">{el.name}</span>
                </div>
              );
            }
          })}
        </div>
      </Link>
    </div>
  );
}

export default AllGames;
