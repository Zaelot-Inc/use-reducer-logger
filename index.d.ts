declare module "use-reducer-logger" {
    type Reducer<State = any, Action = any> = (state: State, action: Action) => State;
    const logger = <State>(reducer: Reducer<State, Action>): Reducer<State, Action> => Reducer;
    export default logger
}
