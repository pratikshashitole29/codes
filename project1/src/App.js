import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User'
import Student from './Student';
import Profile from './Component/Profile';
import Login from './Component/Login';


function App() {
  var [data,setData]=useState(0)
  const[name,setName]=useState("anil")
  var [bData,setbData]=useState()
  var [print,setPrint]=useState()
  
 function getData(val){
  console.log(val.target.value)
  setbData(val.target.value)
 }

  
  function Apple(){
    
     alert("function called");
   
  }

  function updateData(){
    setData(data+1)
  }
  console.warn("--------");
  return (
  <div className='app'>
     
     
    <button onClick={Apple}>Click Me</button>
    <button onClick={()=>alert("hello")}>Click Here</button>
   <h2>{data}</h2>
    <button onClick={updateData}>Update Data</button>
    <User></User> 
    <h1 style={{textAlign:'center'}}> Props in React</h1>
   <Student name={name}email={"niya@gmail.com"}other={{address:"pune",mobileNO:9922680045}}></Student>
  <button onClick={()=>setName("niya")}>update name</button>
   <Student name={"Ankita"} email={"ankita@gmail.com"} other={{address:"Baramati",mobileNo:97756534}}></Student>

   {
     print?
     <h1>{bData}</h1>
     :null
   }
   <input type='text' onChange={getData}/>
   <button onClick={()=>setPrint(true)} >Print Data</button>
    
   <Profile/>
   <Login/>
     </div>

    
  );
}

export default App;
