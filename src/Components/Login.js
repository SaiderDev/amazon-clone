import React,{useState} from 'react'
import Wrapper from './Helpers/Wrapper'
import Modal  from './Modal'
import ReactDom from 'react-dom'

const Login = () => {

  const [isOpen,setIsOpen] = useState(false)
  return (
    <React.Fragment>
        <h1>Sign in Page</h1>
        <p>This is our Sign-in page</p>
        <button onClick={()=>setIsOpen(true)}>Open Modal</button>
        {isOpen && ReactDom.createPortal(<Modal setIsOpen={setIsOpen} />,document.getElementById("modal-root-div")) }
    </React.Fragment>
  )
}

export default Login