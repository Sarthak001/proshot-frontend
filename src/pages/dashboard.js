import React from "react";
import DashboardAlbums from "../components/dashboard.albums";
import NavBar from "../components/navbar";
import SideBar from "../components/sideBar";


const Dashboard = () => {

    return (<>
        <div className="flex flex-col bg-slate-200 min-h-screen">
            <NavBar></NavBar>
            <div className="flex mt-16 min-h-screen">
                <SideBar></SideBar>
                <DashboardAlbums></DashboardAlbums>
            </div>
        </div>
    </>);
}



export default Dashboard;