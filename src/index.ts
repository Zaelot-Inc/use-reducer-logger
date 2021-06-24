import { diff } from 'deep-object-diff';
import { useCallback } from 'react';

declare global {
  interface Window {
    __USE__REDUCER__LOGGER__: boolean;
  }
}

type reducer<T1, T2> = (state: T1, action: T2) => T1;

export default function useLogReducer<T1, T2 extends { type: string }>(
  reducer: reducer<T1, T2>
): reducer<T1, T2> {
  const reducerWithLogger = useCallback(
    (state: T1, action: T2) => {
      const next = reducer(state, action);
      console.group(
        `%c${action.type}`,
        'color: #e91e63; font-size: 14px ;font-weight: bold;'
      );
      console.log(
        '%cPrevious State:',
        'color: #9e9e9e; font-weight: bold;',
        state
      );
      console.log('%cAction:', 'color: #3f51b5; font-weight: bold;', action);
      console.log('%cNext State:', 'color: #009688; font-weight: bold;', next);
      console.log(
        '%cDiff:',
        'color: #ffa270; font-weight: bold;',
        diff(state as any, next as any)
      );
      console.groupEnd();
      return next;
    },
    [reducer]
  );

  return process.env.NODE_ENV === 'development' ||
    window.__USE__REDUCER__LOGGER__
    ? reducerWithLogger
    : reducer;
}
