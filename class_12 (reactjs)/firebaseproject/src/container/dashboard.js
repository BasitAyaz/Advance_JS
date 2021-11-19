import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  auth,
  onAuthStateChanged,
  signOut,
  ref,
  db,
  onChildAdded,
  remove,
} from "../config/firebase";
import Button from "../components/Button";
import MenuAppBar from "../components/header";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function Dashboard() {
  const [userLogin, setUserLogin] = useState(false);
  const [loader, setLoader] = useState(false);
  const [userList, setUserList] = useState([]);
  const [userData, setUserData] = useState({});
  const location = useLocation();
  const Navigation = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out");
        Navigation("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getData = () => {
    let refrence = ref(db, "users/");
    let arr = [];
    onChildAdded(refrence, (snapshot) => {
      if (snapshot.exists()) {
        arr.push(snapshot.val());
        setUserList([...arr]);
      }
    });
  };
  const deleteUser = (id) => {
    const refrence = ref(db, "users/" + id);
    remove(refrence);
  };
  useEffect(() => {
    setLoader(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        setUserLogin(true);
        setLoader(false);
        setUserData(location.state);
        getData();
      } else {
        Navigation("/login");
      }
    });
  }, []);

  return (
    <>
      {loader ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <MenuAppBar name={userData.name} />

          <div>
            <table>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
              {userList.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>
                      <IconButton
                        onClick={() => deleteUser(e.uid)}
                        aria-label="delete"
                        color="primary"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      )}
    </>
  );
}
export default Dashboard;
