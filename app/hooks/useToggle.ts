import { useState } from "react";

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return { isOpen, toggleMenu };
};

export default useToggle;
