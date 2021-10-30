import { useHistory } from "react-router";

function Service() {
  const history = useHistory();
  const peramData = history.location.state ? history.location.state : {};
  //   console.log(peramData);
  return (
    <>
      <h1>Service</h1>
      <h3>Peram Name {peramData.name ? peramData.name : "Data No Recieved"}</h3>
      <h3>Peram age {peramData.age ? peramData.age : "Data Not Recieved"}</h3>
      <h3>
        Peram institute{" "}
        {peramData.institute ? peramData.institute : "Data Not Recieved"}
      </h3>
    </>
  );
}
export default Service;
