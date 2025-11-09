import { useState, useEffect } from 'react';

function getSavedValue<T>(key: string, initialValue: T | (() => T)): T {
  try {
    const savedValue = localStorage.getItem(key);
    if (savedValue) {
      return JSON.parse(savedValue) as T;
    }
  } catch (error) {
    console.error(`Error reading localStorage key “${key}”:`, error);
  }

  if (initialValue instanceof Function) {
    return initialValue();
  }
  return initialValue;
}

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing to localStorage key “${key}”:`, error);
    }
  }, [key, value]); 

  return [value, setValue] as const;
}