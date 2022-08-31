import React from "react";
import NavBar from "../components/navbar";
import DashboardSharedAlbums from "../components/shared.albums";
import SideBar from "../components/sideBar";

const Shared = ()=>{

    return(<>
            <div className="flex flex-col bg-slate-200 min-h-screen">
            <NavBar></NavBar>
            <div className="flex mt-16 min-h-screen">
                <SideBar ></SideBar>
                <DashboardSharedAlbums></DashboardSharedAlbums>
            </div>
        </div>
    
    </>);
}



export default Shared;