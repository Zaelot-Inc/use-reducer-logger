# simple-react-hook-flux-logger
A very very basic logger for the `useReducer` part of the [React Hooks API](https://reactjs.org/docs/hooks-reference.html#usereducer). Inspired by [redux-logger](https://github.com/LogRocket/redux-logger).

# Setup
1. `npm install srhfl --save-dev` or `yarn add srhfl -D`

# Usage
1. Import logger with `import logger from 'srhfl';`
2. Wrap your reducer with logger before passing it to `useReducer`

```
const [state, dispatch] = useReducer(logger(reducer), initialState);
```

## In a Dev Environment
You should only use this in a `dev` environment. So you could do something like this to apply the logger based on the `env`.

```
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const [state, dispatch] = (
  process.env.NODE_ENV === 'development' ? logger(reducer) : reducer,
  initialState
);
```


# Example
1. `git clone [this repo]`
2. `cd example`
3. `yarn && yarn start`

# License
MIT see [`LICENSE`](/LICENSE).

# Contributing
Contributions are welcome.
