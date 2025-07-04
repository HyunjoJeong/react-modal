import { useState } from 'react';
import { ModalService } from '../service';
import type { ModalComponent, ModalConfigProps, ModalCustomProps } from '../types';

export const useModal = <P extends ModalCustomProps>(
  Component: ModalComponent<P>,
  configs?: ModalConfigProps
) => {
  const [modal] = useState(() => new ModalService(Component, configs));
  return modal;
};
