const getData = (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: "DATAFROMAPI",
        apiData: json,
      });
    });
};

export { getData };
