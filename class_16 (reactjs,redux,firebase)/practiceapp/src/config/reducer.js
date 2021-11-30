const INITIAL_STATE = {
  text: "",
};

const reducer = (state = INITIAL_STATE, haris) => {
  if (haris.type == "DATAFROMDATAFILE") {
    state.text = haris.text;
    return { ...state };
  } else if (haris.type == "DISPATCHFROMACTION") {
    return { ...state, ...haris };
  } else {
    return state;
  }
};
export default reducer;
