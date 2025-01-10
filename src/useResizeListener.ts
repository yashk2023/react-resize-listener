import React from 'react';

export const useResizeListener = (): {width: number | null} => {
  const [width, setWidth] = React.useState<number | null>(window.innerWidth);
  const handleResizeListener = () => {
    setWidth(window.innerWidth);
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleResizeListener);
    return () => {
      window.removeEventListener("resize", handleResizeListener);
    };
  }, []);

  return { width };
};
