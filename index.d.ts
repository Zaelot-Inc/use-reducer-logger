declare module "use-reducer-logger" {
    type Reducer<State = any, Action = any> = (state: State, action: Action) => State;
    const logger: <R extends Reducer>(reducer: R) => R;
    export default logger;
}
