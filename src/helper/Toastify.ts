import { Slide, toast, ToastContent, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastifyType = "info" | "success" | "warning" | "error" | "default";

export const Toastify = (msg: ToastContent, type: ToastifyType = "success") => {
  const options: ToastOptions = {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
  };

  toast[type](msg, options);
};
