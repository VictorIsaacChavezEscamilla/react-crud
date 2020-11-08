export const makeType = moduleName => (action, isAsync) => {
  if (isAsync) {
    return {
      START: `${moduleName}/${action}-start`,
      SUCCESS: `${moduleName}/${action}-success`,
      ERROR: `${moduleName}/${action}-error`
    };
  }
  return `${moduleName}/${action}`;
};

export const makeActionCreator = (type, ...argNames) => {
  return function ac(...args) {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
};

export const asyncMac = types => {
  return {
    start: makeActionCreator(types.START),
    success: makeActionCreator(types.SUCCESS, "payload"),
    error: makeActionCreator(types.ERROR, "error")
  };
};

export const createReducer = (initialState, actionHandlers) => {
  return function reducer(state = initialState, action) {
    if (actionHandlers.hasOwnProperty(action.type)) {
      const newState = actionHandlers[action.type](state, action);
      if (newState !== state) {
        return newState;
      }
    }
    return state;
  };
};

export const reduceReducers = (...reducers) => (prevState, value, ...args) =>
  reducers.reduce(
    (newState, reducer) => reducer(newState, value, ...args),
    prevState
  );
