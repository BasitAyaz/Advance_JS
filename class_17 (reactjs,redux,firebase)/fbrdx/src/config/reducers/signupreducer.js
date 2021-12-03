const INITIAL_STATE = {
  label: "signup Reducer Here",
    
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGNUPDATA":
      action.uid = state.signupreducer.uid;
      return state.signupreducer;
    default:
      return state;
  }
};
