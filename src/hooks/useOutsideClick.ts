import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useOutsideClick = (ref: React.RefObject<any>) => {
  const [isClicked, setIsClicked] = React.useState(false);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) setIsClicked(true);
      else setIsClicked(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return isClicked;
};
