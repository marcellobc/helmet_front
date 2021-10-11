import * as dayjs from "dayjs";

const datetime = (date) => {
  return dayjs(date).format("DD/MM/YYYY HH:mm");
};

const date = (date) => {
  return dayjs(date).format("DD/MM/YYYY");
};

export default { datetime, date };
