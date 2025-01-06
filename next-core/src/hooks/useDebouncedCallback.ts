"use client";

import {useCallback, useRef} from 'react';

type callbackFn<T extends unknown[]> = (...args: T) => void;

export const useDebouncedCallback = <T extends unknown[]>(
    func: callbackFn<T>,
    wait?: number,
): callbackFn<T> => {
  const timerRef = useRef<number | null>(null);

  return useCallback(
      ((...args: T) => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        timerRef.current = window.setTimeout(() => {
          func(...args);
        }, wait || 1000);
      }) as callbackFn<T>,
      [wait, func],
  );
};