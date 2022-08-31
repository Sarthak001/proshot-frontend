import React from "react";
import NavBar from "../components/navbar";
import ProfileMain from "../components/profile.main";
import SideBar from "../components/sideBar";


const Profile = ()=>{

    return(<>
            <div className="flex flex-col bg-slate-200 min-h-screen">
            <NavBar></NavBar>
            <div className="flex mt-16 min-h-screen">
                <SideBar></SideBar>
                <ProfileMain></ProfileMain>
            </div>
        </div>
    
    
    </>);
}



export default Profile;