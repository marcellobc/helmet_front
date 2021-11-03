import * as dayjs from "dayjs";
import gameConstants from "../contants/games";

const datetime = (date) => {
  return dayjs(date).format("DD/MM/YYYY HH:mm");
};

const date = (date) => {
  return dayjs(date).format("DD/MM/YYYY");
};

const game = (game) => gameConstants[game];

export default { datetime, date, game };
