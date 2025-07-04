import { toastStore } from "./store";
import type { ToastProps } from "./types";

export const toast = (message: ToastProps["message"], options?: ToastProps["options"]) => {
  const id = Math.random().toString().slice(2);
  toastStore.setState(({ toasts }) => ({ toasts: [...toasts, { id, message, options }] }));
};
