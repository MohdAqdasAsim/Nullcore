// useImagePreloader.ts
import { useState, useEffect } from "react";

export const useImagePreloader = (imageUrls: string[]) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;

    const onLoad = () => {
      loadedCount++;
      if (loadedCount === imageUrls.length) {
        setLoaded(true);
      }
    };

    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = onLoad;
      img.onerror = onLoad; // still continue if one fails
    });
  }, [imageUrls]);

  return loaded;
};
