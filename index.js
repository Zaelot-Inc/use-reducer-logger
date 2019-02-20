const logger = (reducer) => {
  const reducerWithLogger = (state, action) => {
    console.log("Previous State:", state);
    console.log("Action:", action);
    console.log("Next State:", reducer(state,action));
    return reducer(state,action);
  };

  return reducerWithLogger;
}

export default logger;