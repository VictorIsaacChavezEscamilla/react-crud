//Higher-order reducers

export const loadHOR = ({ START, SUCCESS, ERROR }) => ({
  [START]: state => ({ ...state, fetching: true }),
  [SUCCESS]: (state, { payload }) => ({
    ...state,
    data: payload,
    fetching: false,
    fetched: true
  }),
  [ERROR]: (state, { error }) => ({
    ...state,
    error,
    fetching: false
  })
});

export const createHOR = ({ START, SUCCESS, ERROR }) => ({
  [START]: state => ({ ...state, creating: true }),
  [SUCCESS]: (state, { payload }) => ({
    ...state,
    data: { ...state.data, ...payload },
    creating: false
  }),
  [ERROR]: (state, { error }) => ({
    ...state,
    error,
    creating: false
  })
});

export const removeHOR = ({ START, SUCCESS, ERROR }) => ({
  [START]: state => ({ ...state, deleting: true }),
  [SUCCESS]: (state, { payload }) => {
    const newData = Object.assign({}, state.data);
    delete newData[payload];

    return {
      ...state,
      data: { ...newData },
      deleting: false,
      error: null
    };
  },
  [ERROR]: (state, { error }) => ({
    ...state,
    error,
    deleting: false
  })
});

export const updateHOR = ({ START, SUCCESS, ERROR }) => ({
  [START]: state => ({ ...state, updating: true }),
  [SUCCESS]: (state, { payload }) => {
    const { id, element } = payload;
    const newData = Object.assign({}, state.data);
    newData[id] = element;

    return {
      ...state,
      data: { ...newData },
      updating: false,
      error: null
    };
  },
  [ERROR]: (state, { error }) => ({
    ...state,
    error,
    updating: false
  })
});
