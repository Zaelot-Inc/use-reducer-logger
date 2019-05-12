type Reducer<State, Action> = (state: State, action: Action) => State;
export type logger<State, Action> = (reducer: Reducer) => Reducer;