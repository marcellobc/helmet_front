import games from "../../../shared/contants/games";
import session from "../../../shared/functions/session";

const getAll = () =>
  Object.entries(games).map(([key, value]) => ({ value: key, label: value }));

const getAllByLoggedUser = () => {
  return session
    .getData()
    .loggedUser.games.map((key) => ({ value: key, label: games[key] }));
};

const getNonListedByLoggedUser = () => {
  const allGames = getAll();
  const userGames = getAllByLoggedUser();

  return allGames.filter(
    (game) => !userGames.some((userGame) => userGame.value === game.value)
  );
};

export default { getAll, getAllByLoggedUser, getNonListedByLoggedUser };
