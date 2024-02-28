
import { useEffect, useState } from "react";
import { FaThumbsUp, FaRegComment } from "react-icons/fa";
import axios from "axios"


//in image kept in public always use slash then directly name / showing see below must
function ProfilePage({setProfileHeaderNav}) {
   
   const [userDetails, setUserDetails] = useState({})
//    useEffect(() => {
//     const interceptor = axios.interceptors.request.use((config) => {
//       const storedAccessToken = localStorage.getItem("accessToken");
//       if (storedAccessToken) {
//         config.headers.Authorization = `Bearer ${storedAccessToken}`;
//       }
//       return config;
//     });
  
//     return () => {
//       // Clean up the interceptor when the component unmounts
//       axios.interceptors.request.eject(interceptor);
//     };
//   }, []);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/users/current-user");
//         setUserDetails(response.data.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error.message);
//       }
//     };
  
//     fetchData(); // Call the asynchronous function
//   }, []);


useEffect(() => {
    const fetchData = async () => {
      try {
        const storedAccessToken = localStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:3000/users/current-user", {
          headers: {
            Authorization: `Bearer ${storedAccessToken}`  //must take care of space very wisely
          }
        });
        setUserDetails(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };
  
    fetchData(); // Call the asynchronous function
  }, []);



   useEffect(() => {
    // Call setProfileHeaderNav when the component mounts
    setProfileHeaderNav({
      isLoggedIn: true ,
      userFullName: userDetails?.fullName,
      userAvatar: userDetails?.avatar
    })} , [setProfileHeaderNav ,userDetails]);

    


      
  return (
    <div className="flex justify-center ">
        <div className="w-2/3 relative my-4">
            <img src={userDetails?.coverImage || "/coverImage.webp"} className="h-48 w-full rounded-t-xl" alt="" />  
            <img src={userDetails?.avatar || "/userImage.png"} className="w-28 h-28 rounded-full absolute top-28 left-6" alt="" />
            <div className="bg-white px-6 py-12 rounded-b-xl">
                <h1 className=" font-semibold text-2xl">{userDetails?.fullName}</h1>
                <h2 className="font-medium text-base text-gray-600">New Delhi, India</h2>
                <div className="flex gap-4 text-sky-600 font-bold">
                    <a href="">172 followers</a>
                    <a href="">200 links</a>
                </div>
                <div className="flex gap-6 py-1">
                    <a href="" className="text-sky-600">Linkedin</a>
                    <a href="" className="text-sky-600">Facebook</a>
                    <a href="" className="text-sky-600">Instagram</a>
                    <a href="" className="text-sky-600">Youtube</a>
                </div>
                <div className="flex gap-5">
                    <button className="px-5 py-1 mt-2 rounded-2xl bg-sky-600 text-white font-bold text-base">Follow</button>
                    <button className="px-5 py-1 mt-2 rounded-2xl bg-orange-500 text-white font-bold text-base">Link 🔗</button>
                    <button className="px-3 py-1 mt-2 rounded-lg border-2 border-sky-600 text-sky-600 font-bold text-base">✎ Edit Profile</button>
                </div>
            </div>
            <div className="my-4 px-10 py-4 bg-white rounded-xl">
                <h2 className="text-2xl font-semibold">Activity</h2>
                <div className="p-1 my-4 pb-8 border-b-2 border-gray-300">
                <div className="flex gap-1 text-gray-400 mt-4">
                    <h6 className="text-xs">Amrish Pratap Singh</h6>
                    <h6 className="text-xs">posted 5 months ago</h6>
                </div>
                <div className="flex gap-4 mt-2">
                   <img src="/userImage.png" className=" w-24 h-24 m-auto" alt="" />
                   <div className="">
                   <h3 className="p-2 text-lg font-bold">Top 10 commands of cmd on windows.</h3>
                   <p className="px-2 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quaerat nihil laudantium. Nisi optio illo voluptas eos ad iure molestiae sunt omnis consequuntur fuga
                   </p>
                   </div>     
                </div>
                <div className="flex mt-4 gap-14 ml-22">
                    <div className="flex text-orange-500 font-semibold"><FaThumbsUp className="m-auto mr-2 text-orange-500" fill="rgb(249 115 22)" />104 Likes</div>
                    <div className="flex font-semibold"><FaRegComment className="m-auto mr-2" />10 Comments</div>
                </div>
                </div>
            </div>

        </div>  
    </div>
  )
}

export default ProfilePage