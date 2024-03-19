import Form from 'react-bootstrap/Form';
import {Button,Alert,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import userContext from './context';
import { useContext } from 'react';
import axios from 'axios'


export default function Create(){

// let ctx = useContext(userContext)
const [name,setName]=useState('');
const [mail,setmail]=useState('');
const [pass,setPass]=useState('');
// const [show, setShow] = useState(false)  
const [users,setUsers] = useState();

function handleInputChange(e,setter){
  setter(e.target.value);
  name !=='' && mail !=='' && pass !=='' ? document.querySelector(".create-btn").classList.remove("disabled"):document.querySelector(".create-btn").classList.add("disabled")
  
}

async function submitHandler(e){
    e.preventDefault();
    if(name !=='' && mail !==''&& pass.length > 8){
      // let userExist = users.some((user)=>user.name===name && user.email===mail);

      // if(!userExist){
        const newUser = {
          "name":name,
          "email":mail,
          "password":pass,
          "amount":0
        };
        await axios.post('https://server-0pwt.onrender.com/create',newUser).then(alert("Account created successfully!!!!")); 
    }
    else{
      if(name === '' && mail ===''){
        alert("Please enter you name and email")
      }
      else if(name === ''){
        alert("please enter your name")
      }
      else if(mail === ''){
        alert("please enter your email")
      }
      else if(pass.length < 8){
        alert("password must have above 8 characters")
      }
    }      
}

// ctx.users=users

return(<>
    <Card style={{border:"none"}}>
     <div id='form-div'>
     <Form className="form-inline" onSubmit={submitHandler}>
     
        <h1>Create Account</h1>
        <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>handleInputChange(e,setName)} value={name}/>
      </Form.Group>
       
      <Form.Group className="mb-3">  
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>handleInputChange(e,setmail)} value={mail} autocomplete="off"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="password" placeholder="Password" onChange={(e)=>handleInputChange(e,setPass)} value={pass}/>
      </Form.Group>
     <div className='create-btn-parent'> <Button type='submit' className='create-btn disabled' style={{backgroundColor:'#9d75cf' , color:'white', borderColor:'#9d75cf'}}>Create Account</Button>
      <Button type='reset' className='create-btn' style={{backgroundColor:'#9d75cf' , color:'white', borderColor:'#9d75cf'}} onClick={e=>{setName('');setmail('');setPass('')}}>Add another account</Button></div>
     
    </Form>
    </div>
    </Card>
</>)
}