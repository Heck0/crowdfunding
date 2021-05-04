import { useCallback, useState } from "react";

const useModal = (initialState: boolean): [boolean, () => void] => {
  const [isModalActive, setIsActive] = useState(initialState);

  const toggleModal = useCallback(() => setIsActive((state) => !state), [
    setIsActive,
  ]);

  return [isModalActive, toggleModal];
};

export default useModal;
