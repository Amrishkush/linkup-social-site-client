import axios from "axios"
import { useNavigate } from "react-router-dom";
import { backendURL } from "../utils/apiURL";


function Header({setSignIn, profileHeaderNav, setProfileHeaderNav}) {

  const apiURL = `${backendURL}/users/logout` 
  const navigateToSignInPage = useNavigate()

  const handleSignOut = async () => {
    try {
      const storedAccesToken = localStorage.getItem("accessToken")
      await axios.post(apiURL, null ,{
        headers: {
          Authorization: `Bearer ${storedAccesToken}`  //must take care of space very wisely
        }
      });
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      setSignIn(true)
      setProfileHeaderNav({})
      navigateToSignInPage("/")
    } catch (error) {
      console.error("Error during sign out:", error.message);
    }
  };

  
  return (
    <>
      <section className="flex justify-between p-2 bg-white sticky top-0 z-10">
        <div>
          <h1 className="px-4 font-extrabold text-3xl text-orange-500">LinkUp</h1>
        </div>
        {   
          profileHeaderNav.isLoggedIn ?
          " " :
        <div className= "">
          <nav className="flex px-2 gap-x-8 text-gray-900 p-2">
            <div  className="font-semibold text-sm">HOME</div>
            <div onClick={(()=>setSignIn(true))} className="font-semibold text-sm cursor-pointer" >SIGN IN</div>
            <div onClick={(()=>setSignIn(false))} className="font-semibold text-sm cursor-pointer">SIGN UP</div>
          </nav>
        </div>
        }
        {profileHeaderNav.isLoggedIn ?
        <div className="flex mr-2">
             
            
            <button className="border-2 border-orange-500 p-2 text-sm font-normal" onClick={handleSignOut}>Sign Out</button> 
            <h2 className=" p-2 font-semibold text-sm">{profileHeaderNav.userFullName}</h2>
            <img src={profileHeaderNav.userAvatar || "/userImage.png"} alt=""  className="rounded-full w-10 h-10"/> 
        </div>
        : ""}
      </section>
    </>
  );
}

export default Header;
