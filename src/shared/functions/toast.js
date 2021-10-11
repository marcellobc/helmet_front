import { toast } from "react-toastify";

export default {
  success: (message) =>
    toast.success(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }),
  error: (message) =>
    toast.error(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }),
  warn: (message) =>
    toast.warn(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }),
  info: (message) =>
    toast.info(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }),
};
