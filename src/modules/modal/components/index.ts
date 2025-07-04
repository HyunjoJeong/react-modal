import { ModalBase } from './ModalBase';
import { ModalButtons } from './ModalButtons';
import { ModalTitle } from './ModalTitle';

export const Modal = Object.assign(ModalBase, {
  Title: ModalTitle,
  Buttons: ModalButtons,
});
