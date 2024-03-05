import { useState } from "react";
import axios from "axios"
import { backendURL } from "../utils/apiURL";

function SignUp({ setSignIn }) {

const [email, setEmail] = useState("")
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [fullName, setFullName] = useState("")
const [avatar, setAvatar] = useState(null)
//name of every inputfield must match to backend name to which we are posting 
const apiURL = `${backendURL}/users/register`

const handleSignUp = async(e)=>{
  e.preventDefault();

  try{

    const response = await axios.post(apiURL, {email, username, password, fullName , avatar},{
      headers: {
        "Content-Type": "multipart/form-data", // If data is is in multi format basically
      }
      })
      if(response.data && response.data.data){
        setSignIn(true)
        console.log(response.data.message)
      } else{
        console.log("Cannot create")
      }
  }catch(error){
    console.log("Error while registering " , error.message)
}
}

  return (
    <div className="w-1/2 m-auto bg-white rounded-md mx-24 shadow-2xl">
      <div className="text-center p-6">
        <div>
          <h1 className="my-2 text-3xl font-bold">Sign Up !</h1>
          <p className="my-2 text-xl font-semibo">Link Up connects India !</p>
          <p className="my-2 text-xl font-semibo">Create Account.</p>
        </div>
        <form action="" className="flex p-6 border-b-2 border-gray-300" onSubmit={handleSignUp}>
          <div className="w-full">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                id=""
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full border-2 mt-3 p-2 rounded-m"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full border-2 mt-5 p-2 rounded-md"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e)=>setUsername(e.target.value)}
                className="w-full border-2 mt-5 p-2 rounded-md"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={(e)=>setFullName(e.target.value)}
                className="w-full border-2 mt-5 p-2 rounded-md"
                required
              />
            </div>
            <div>
              <input
                type="file"
                name="avatar"
                onChange={(e)=>setAvatar(e.target.files[0])}
                className="w-full border-2 mt-5 p-2 rounded-md"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-green-500 mt-5 p-2 text-white text-xl rounded-md"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <div className="mt-5">
          <span className="text-sm font-semibold">
            Already have an account ?
          </span>
          <button
            type="button"
            className="p-1 px-5 border-2 border-orange-500 ml-8 text-lg font-semibold text-orange-500 rounded-md"
            onClick={() => setSignIn(true)}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
