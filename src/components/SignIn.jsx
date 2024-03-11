import { useState, } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { backendURL } from "../utils/apiURL";



function SignIn({setSignIn}) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const apiURL = `${backendURL}/users/login`
  
  const navigateToProfilePage = useNavigate()




  const handleSignIn = async(e) => {
    e.preventDefault()
    try{
      const response = await axios.post(apiURL, {email, password})
      const accessToken = response.data.data.accessToken
      const refreshToken= response.data.data.refreshToken
      const username = response.data.data.user.username
      localStorage.setItem("accessToken", accessToken)
      localStorage.setItem("refreshToken", refreshToken)
      navigateToProfilePage(`/users/${username}`)  //it will go when data will be there otherwise do useEffect way try
      setSignIn(false)
      
    }catch(error){
      console.log("error while logging in", error.message)
    }
  }

  return (
    <div className="w-1/2 m-auto bg-white rounded-md mx-24 shadow-2xl">
      <div className="text-center p-6">
        <div>
          <h1 className="my-2 text-3xl font-bold">Sign In !</h1>
          <p className="my-2 text-xl font-semibo">Link Up connects India !</p>
        </div>
        <form action="" className="flex p-6 border-b-2 border-gray-300" onSubmit={handleSignIn}>
          <div className="w-full">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full border-2 mt-3 p-2 rounded-md"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full border-2 mt-5 p-2 rounded-md"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-orange-500 mt-5 p-2 text-white text-xl rounded-md"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
        <div className="mt-5">
          <span className="text-sm font-semibold">Dont Have an account ?</span>
          <button
            type="button"
            className="p-1 px-5 border-2 border-orange-500 ml-8 text-lg font-semibold text-orange-500 rounded-md"
            onClick={()=>setSignIn(false)}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
