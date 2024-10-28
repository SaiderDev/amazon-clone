import React,{useState,useReducer,useRef,useEffect,useContext} from 'react'
import { Link,useHistory } from 'react-router-dom'
import './Login.css'
import AuthContext from '../Context/authContext';
import { auth } from '../Firebase';




// const reducer = (state,action) =>{



//   if(action.type === "EMAIL_INPUT"){
//        return {...state, emailValue:action.payload};
//   }
//   if(action.type === "PASS_INPUT"){
//     return {...state, passwordValue:action.payload};
//   }
//   return {emailValue:"",passwordValue:""}
// };


const Login = () => {
  const [email,setEmail] =useState("")
  const [password,setPassword] =useState("")
  const history = useHistory();

//   const newContext =useContext(AuthContext)
//   // const [email,setEmail] =useState("")
//   // const [password,setPassword] =useState("")


//   const [isLoggedIn,setIsLoggedIn] = useState(false);
//   const [formIsValid,setFormIsValid] = useState(false)

//   const [state,dispatch] = useReducer(reducer,{
//     emailValue:"",
//     passwordValue:"",
//   });

//   const {emailValue: email,passwordValue:password} =state
  
//   // const emailRef = useRef();
//   // const passwordRef = useRef();
  
// //This useEffect() handles the side effect of validating the password and email
//   useEffect(()=> {
//       const identifier = setTimeout(() => {
//       console.log("Check for form validity")
//       setFormIsValid(email.includes("@") && password.trim().length>6)
      
//     },500)

//     // const user = localStorage.getItem("isLoggedIn")
//     // if(user){
//     //   setIsLoggedIn(true)
//     // }
    
//     return () => {
//       console.log('CLEANUP HERE')
//       clearTimeout(identifier)
//     }
  
//   },[email,password])

//   const emailChangeHandler = (e) => {
//     dispatch({type: "EMAIL_INPUT", payload: e.target.value })

//   }
//   const passwordChangeHandler = (e) => {
//     dispatch({type: "PASS_INPUT", payload: e.target.value})

//   }

  const signIn = e => {

          e.preventDefault();
          // console.log(formIsValid)
          // const enteredEmail = emailRef.current.value;
          // const enteredPassword = passwordRef.current.value;
          // console.log("Email: ",enteredEmail +" Password: ",enteredPassword)
          // localStorage.setItem('isLoggedIn', '1')
          // setIsLoggedIn(true)
          // newContext.onLogin(state.emailValue,state.passwordValue)

          auth
              .signInWithEmailAndPassword(email,password)
              .then((auth) => {
                history.push('/')
              })
              .catch(error => alert(error.message))
        };


        // const signOut = () =>{
        //   setIsLoggedIn(false)
        //   localStorage.removeItem("isLoggedIn")
        // }


 const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
          if(auth){
            history.push("/")
          }
        }).catch(error => alert(error.message))
 }

  return (
    <div className='login'>
      {/* { isLoggedIn && (
      <p>You are logged in 
        
        
        <button onClick={signOut}>Sign Out</button>
        
      </p>
      )} */}

      <Link to="/">
        <img src="https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg"
        alt="Amazon Logo"
        className='login_logo'/>
      </Link>

      <div className='login_container'>
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input  type="text" 
                  value={email}
                  // ref={emailRef}
                  onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input  type="password"  
                  value={password}
                  // ref={passwordRef}
                  onChange={e => setPassword(e.target.value)}
          />

          <button   type="submit" 
                    className='login_signInButton'
                    onClick={signIn}
                
          >Sign In</button>

        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button className='login_registerButton'onClick={register}>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login