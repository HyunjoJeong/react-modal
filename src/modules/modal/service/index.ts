import { MODAL_ANIMATION_DURATION } from '../constants';
import { modalStore } from '../store';
import type {
  ModalActionProps,
  ModalComponent,
  ModalConfigProps,
  ModalCustomProps,
  ModalProps,
} from '../types';

export class ModalService<P extends ModalCustomProps> {
  private readonly id: string;
  private readonly Component: ModalComponent<P>;
  private readonly configProps: ModalConfigProps | undefined;

  constructor(Component: ModalComponent<P>, configProps?: ModalConfigProps) {
    this.id = Math.random().toString().slice(2);
    this.Component = Component;
    this.configProps = configProps;
  }

  open = (customProps: P) => {
    const actionProps: ModalActionProps = { isOpen: true, onClose: this.close };
    const props: ModalProps<P> = { ...actionProps, ...this.configProps, ...customProps };

    const newModalService = { id: this.id, Component: this.Component, props };

    modalStore.setState(({ mountedServices }) => {
      if (mountedServices.some((service) => service.id === this.id)) return { mountedServices };
      return { mountedServices: [...mountedServices, newModalService] };
    });
  };

  close = () => {
    // isOpen props를 false로 바꾸어 closing animation을 실행
    modalStore.setState(({ mountedServices }) => {
      const nextState = mountedServices.map((service) => {
        if (service.id !== this.id) return service;
        return { ...service, props: { ...service.props, isOpen: false } };
      });

      return { mountedServices: nextState };
    });

    // closing 애니메이션이 종료되면 store 에서 제거 (unmount)
    setTimeout(() => {
      modalStore.setState(({ mountedServices }) => ({
        mountedServices: mountedServices.filter((service) => service.id !== this.id),
      }));
    }, MODAL_ANIMATION_DURATION - 30);
  };

  update = (props: Partial<P>) => {
    modalStore.setState(({ mountedServices }) => {
      const nextState = mountedServices.map((service) => {
        if (service.id !== this.id) return service;
        return { ...service, props: { ...service.props, ...props } };
      });

      return { mountedServices: nextState };
    });
  };
}
