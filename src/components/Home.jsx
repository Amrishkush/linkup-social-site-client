
import SignIn from "./SignIn"
import SignUp from "./SignUp"


function Home({signIn, setSignIn}) {
    
  return (
    <div className={`flex ${signIn ? "mt-28" : "mt-6"}`}>
         <div className="w-1/2 m-auto ml-20">
          <h2 className="text-7xl text-orange-500 font-extrabold">LinkUp: <span className="text-black">Connect. Share. Shine.</span></h2>
          <h3 className="text-sm font-semibold mt-4">Uniting People Through Shared Moments and Endless Possibilities.</h3>
         </div>
        {signIn ? <SignIn setSignIn={setSignIn} /> : <SignUp setSignIn={setSignIn}/>}
        </div>
  )
}

export default Home