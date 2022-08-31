import React from "react";
import AlbumPhotos from "../components/album.photos";

import NavBar from "../components/navbar";
import SideBar from "../components/sideBar";
import { useParams } from "react-router-dom";

const Album = ()=>{
    let params = useParams();
    return(<>
            <div className="flex flex-col bg-slate-200 min-h-screen">
            <NavBar albumName={params.albumId.split(".")[0]}></NavBar>
            <div className="flex mt-16 min-h-screen">
                <SideBar></SideBar>
                <AlbumPhotos></AlbumPhotos>
            </div>
        </div>
    </>);
}



export default Album;