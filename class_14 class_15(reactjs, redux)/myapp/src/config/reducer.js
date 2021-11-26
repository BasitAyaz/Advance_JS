const INITIAL_STATE = {
  userName: "Basit",
  age: 12,
  apiData: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  console.log(action);

  if (action.type === "DATAFROMAPI") {
    state.apiData = action.apiData;
    return { ...state, ...action };
  }
  return state;
};

export default reducer;
