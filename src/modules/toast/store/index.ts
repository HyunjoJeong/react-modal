import { createStore } from 'zustand';
import type { ToastProps } from '../types';

export const toastStore = createStore<{ toasts: ToastProps[] }>(() => ({ toasts: [] }));
