import { useState } from "react";
import "./App.css";
import { Button, LoginButton, Pera } from "./button";
import logo from "./logo.svg";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({});
  const [data, setData] = useState([
    {
      name: "Men Shirt",
      discpriton: "New Black Shirt For Men",
      imge: "https://sc04.alicdn.com/kf/Hdae17163cb0a4c1fbb300cc754e19e81l.jpg",
      price: "499",
    },
    {
      name: "Men Shirt New",
      discpriton: "New blue Shirt For Men",
      imge: "https://ae01.alicdn.com/kf/HTB1ouCNMVXXXXaOXFXXq6xXFXXXj/New-Autumn-Fashion-Brand-Print-Shirts-Slim-Fit-Shirt-Men-Long-Sleeve-Cotton-Casual-Mens-Shirts.jpg",
      price: "500",
    },
    {
      name: "Men's Casual Shirt",
      discpriton: " Shirt Cotton Long Sleeve Button ",
      imge: "https://i.pinimg.com/originals/e4/5a/43/e45a43655c7502a3b053c0261e2d1ec5.jpg",
      price: "699",
    },
    {
      name: "Men Shirt",
      discpriton: "Mens Formal Shirts For Men Clothes",
      imge: "https://image.dhgate.com/0x0s/f2-albu-g10-M01-F5-61-rBVaWVyks8SAdU7lAADdjruigfw389.jpg/men-shirt-long-sleeve-mens-shirts-casual.jpg",
      price: "750",
    },
    {
      name: "Girl Shirt",
      discpriton: "New White Shirt For Girls",
      imge: "https://images-eu.ssl-images-amazon.com/images/I/61gqf3Ufn4L._AC._SR360,460.jpg",
      price: "799",
    },
    {
      name: "Girl Jeans Shirt",
      discpriton: "Jeans Shirt High Quality",
      imge: "https://static-01.daraz.pk/p/95fd1da70adfa68fd1c41963e59ce4f9.jpg_340x340q80.jpg_.webp",
      price: "900",
    },
    {
      name: "woman Casual Shirt",
      discpriton: " Women Printed Stylish Full Sleeve ",
      imge: "https://looksgud.com/blog/wp-content/uploads/2017/05/sangria-mandarin-collar-full-placket-printed-tunic.jpg",
      price: "999",
    },
    {
      name: "New Girl Shirt",
      discpriton: "shirts are designed for formal, casual",
      imge: "https://stylesatlife.com/wp-content/uploads/2019/05/Full-Sleeved-Red-Plain-Shirt-for-Women.jpg",
      price: "550",
    },
    {
      name: "Children Shirt",
      discpriton: "casual t-shirt for children",
      imge: "https://stylesatlife.com/wp-content/uploads/2017/09/Kids-Polo-Neck-T-Shirt.jpg.webp",
      price: "499",
    },
    {
      name: "kid Print  Shirt",
      discpriton: "Print t-shirt for kids ",
      imge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8Qsr1ZH9vWV4dmyn5hkxs_KsCeMVbYMhlw&usqp=CAU",
      price: "900",
    },
    {
      name: "Kid Casual Shirt",
      type: "men",
      discpriton: "Bon Organik Beach Please Tshirts for  Boys",
      imge: "https://m.media-amazon.com/images/I/51DXEXhVl0L._UL1000_.jpg",
      price: "999",
    },
    {
      name: "Kid t-shirt",
      type: "men",
      discpriton: "Powerpuff - Kids The Holi Crew T-Shirts",
      imge: "https://m.media-amazon.com/images/I/51nLxOlFFkL._SL1000_.jpg",
      price: "550",
    },
  ]);

  let sbmt = () => {
    let obj = {
      name,
      email,
    };
    setUser(obj);
    console.log(user);
  };

  console.log(user);
  return (
    <>
      <h1>Sign Up</h1>
      <input
        className="inp"
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        className="inp"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Button onClick={sbmt} className="btn" value="Custom Value" />
      <Button value="cusd" classNa="btn" />

      <Pera style={{ color: "blue", fontSize: "1.2em" }} val={123}>
        123
      </Pera>
      <img src={logo} width="100px" />

      {/* <button style={{ color: 'white', fontSize: '10px', backgroundColor: 'black' }} onClick={sbmt}>Submit</button> */}
      {/* <Button style={{}} buttonText='Login' /> */}
      {/* <Button buttonText='Register' /> */}
      {/* <Button buttonText='Submit' /> */}
      {/* <Button buttonText='Apply' /> */}
    </>
  );
}

export default App;
