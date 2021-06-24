import { diff } from 'deep-object-diff';
import { useCallback } from 'react';

function useLogReducer(reducer) {
  var reducerWithLogger = useCallback(function (state, action) {
    var next = reducer(state, action);
    console.group("%c" + action.type, 'color: #e91e63; font-size: 14px ;font-weight: bold;');
    console.log('%cPrevious State:', 'color: #9e9e9e; font-weight: bold;', state);
    console.log('%cAction:', 'color: #3f51b5; font-weight: bold;', action);
    console.log('%cNext State:', 'color: #009688; font-weight: bold;', next);
    console.log('%cDiff:', 'color: #ffa270; font-weight: bold;', diff(state, next));
    console.groupEnd();
    return next;
  }, [reducer]);
  return process.env.NODE_ENV === 'development' || window.__USE__REDUCER__LOGGER__ ? reducerWithLogger : reducer;
}

export default useLogReducer;
//# sourceMappingURL=logger-for-use-reducer.esm.js.map
