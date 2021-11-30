import { Route, Routes } from "react-router";


function About() {
  return (
    <>
      <h1>About</h1>
      <div>
        <Routes>
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/services" element={<Service />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </div>
    </>
  );
}
export default About;

function Invoice() {
  return <h1>Invoice</h1>;
}
function Service() {
  return <h1>Service</h1>;
}
function Messages() {
  return <h1>Messages</h1>;
}
