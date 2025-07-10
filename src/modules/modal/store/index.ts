import { createStore } from "zustand";
import type { ModalService } from "../types";

export const modalStore = createStore<{ mountedServices: ModalService<any>[] }>(() => ({
  mountedServices: [],
}));
