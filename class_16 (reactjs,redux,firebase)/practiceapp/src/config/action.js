function getData(obj) {
  return (dispatch) => {
    dispatch({
      type: "DISPATCHFROMACTION",
      ...obj,
    });
  };
}

export { getData };
