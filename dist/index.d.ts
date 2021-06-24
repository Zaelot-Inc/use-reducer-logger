declare global {
    interface Window {
        __USE__REDUCER__LOGGER__: boolean;
    }
}
declare type reducer<T1, T2> = (state: T1, action: T2) => T1;
export default function useLogReducer<T1, T2 extends {
    type: string;
}>(reducer: reducer<T1, T2>): reducer<T1, T2>;
export {};
