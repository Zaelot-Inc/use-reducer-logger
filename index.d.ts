declare module "use-reducer-logger" {
    type Reducer<State = any, Action = any> = (state: State, action: Action) => State;
    const logger = (reducer: Reducer<State, Action>):Reducer => Reducer;
    export default logger
}
