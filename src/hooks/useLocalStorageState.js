import { useEffect, useState } from "react";

export default function useLocalStorageState(key, initialValue) {
  const [value, setValue] = useState(() => {
    const localStorageValue = localStorage.getItem(key) || null;
    return localStorageValue ? JSON.parse(localStorageValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
