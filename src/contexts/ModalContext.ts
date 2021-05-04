import { createContext } from "react";

type ModalContextType = {
  isModalActive: boolean;
  toggleModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);
export const ModalProvider = ModalContext.Provider;

export default ModalContext;
