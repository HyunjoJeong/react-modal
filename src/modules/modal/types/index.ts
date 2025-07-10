import type { Interpolation, Theme } from "@emotion/react";
import type { ComponentType } from "react";

export type ModalActionProps = {
  state: "open" | "close";
  onClose: () => void;
};

export type ModalConfigProps = {
  lockScroll?: boolean;
  closeOnEscape?: boolean;
  closeOnOverlayClick?: boolean;

  overrideStyles?: {
    overlay?: Interpolation<Theme>;
    wrapper?: Interpolation<Theme>;
  };
};

export type ModalCustomProps = { [key: string]: any };

export type ModalProps<P extends ModalCustomProps = {}> = ModalActionProps & P & ModalConfigProps;

export type ModalComponent<P extends ModalCustomProps = {}> = ComponentType<ModalProps<P>>;

export type ModalService<P extends ModalProps = ModalProps> = {
  id: string;
  Component: ComponentType<P>;
  props: P;
};
