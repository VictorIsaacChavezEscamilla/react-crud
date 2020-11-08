export default ({ dispatch, getState }) => {
  return next => async action => {
    const { actions, request } = action;

    if (!actions) {
      return next(action);
    }

    const { start, success, error } = actions;
    if (!start || !success || !error) {
      throw new Error("3 actions are needed");
    }

    if (typeof request !== "function") {
      throw new Error("´request´ must be a function");
    }

    dispatch(start());
    try {
      const result = await request();
      dispatch(success(result));
    } catch (e) {
      dispatch(error(e));
    }
  };
};
