import { useParams } from "react-router";

function Profile() {
  const perams = useParams();
  console.log(perams);
  return <h1>Profile</h1>;
}
export default Profile;
