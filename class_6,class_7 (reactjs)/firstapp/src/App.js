import { useState } from 'react';
import './App.css';
import {Button,LoginButton,Pera} from './button';
import logo from './logo.svg'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [user, setUser] = useState({})

  let sbmt = () => {
    let obj = {
      name,
      email
    }
    setUser(obj)
    console.log(user)
  }

  console.log(user)
  return (<>
    <h1>Sign Up</h1>
    <input className='inp' onChange={(e) => setName(e.target.value)} placeholder='Name' />
    <input className='inp' onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
    <Button onClick={sbmt} className='btn' value='Custom Value' />
    <Button value='cusd' classNa='btn' />
    
    <Pera>
      Basit Ahmed
    </Pera>
    <img src={logo} width='100px' />
    
    
    {/* <button style={{ color: 'white', fontSize: '10px', backgroundColor: 'black' }} onClick={sbmt}>Submit</button> */}
    {/* <Button buttonText='Login' /> */}
    {/* <Button buttonText='Register' /> */}
    {/* <Button buttonText='Submit' /> */}
    {/* <Button buttonText='Apply' /> */}
  </>
  );
}

export default App;
