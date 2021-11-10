import { Route, Routes } from "react-router";

function User() {
  return <h1>User</h1>;
}
function Message() {
  return <h1>Message</h1>;
}
function Feedback() {
  return <h1>Feedback</h1>;
}

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/user/:userdId" element={<User />} />
        <Route path="/msg" element={<Message />} />
        <Route path="/fdback" element={<Feedback />} />
      </Routes>
    </>
  );
}
export default Dashboard;
