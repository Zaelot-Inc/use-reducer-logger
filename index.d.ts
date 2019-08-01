declare model "use-reducer-logger" {
  type Reducer<State = any, Action = any> = (state: State, action: Action) => State; 
  export logger<State, Action> = (reducer: Reducer) => Reducer;
}
