import React, { useState } from "react";
import { Link } from "react-router-dom";


import { FcLock,FcPanorama,FcShare,FcServices } from "react-icons/fc";

import {AuthStore} from '../store/authstore'
import {useRecoilState} from 'recoil';


const SideBar = () => {
    // eslint-disable-next-line 
    const [auth, setAuth] = useRecoilState(AuthStore);
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const activeClass = "duration-300 text-lg font"
    const deactiveClass = "hidden"

    const logout = ()=>{
        setAuth({        
            status:false,
            message:"",
            userName:"",
            email:"",
            token:"",})
    }

    return (<>

        <div
            onMouseEnter={(e) => setSideBarOpen(true)}
            onMouseLeave={(e) => setSideBarOpen(false)}
            className="sidebar fixed left-0 bottom-0 top-16 z-40 shadow-md flex-none bg-slate-500 text-slate-100 group flex flex-col w-20 duration-200 hover:duration-1000 peer hover:w-72"
        >
            <div className="my-5">
                <ul className="flex flex-col justify-center items-center">
                    <li className="w-11/12 my-1">
                        <Link to="/">
                            <div className={
                                !sideBarOpen ? "flex p-2 cursor-pointer hover:text-slate-100 items-center gap-x-4  hover:bg-slate-800 rounded justify-center" : "flex p-2 cursor-pointer hover:text-slate-100 text-sm items-center gap-x-4  hover:bg-slate-800 rounded"
                            }>
                                <FcPanorama className="" size={40}></FcPanorama>
                                <span className={
                                    sideBarOpen ? activeClass : deactiveClass
                                }>ALBUMS</span>
                            </div>
                        </Link>
                    </li>
                    <li className="w-11/12 my-1">
                        <Link to="/hared">
                            <div className={
                                !sideBarOpen ? "flex p-2 cursor-pointer hover:text-slate-100 items-center gap-x-4  hover:bg-slate-800 rounded justify-center" : "flex p-2  cursor-pointer hover:text-slate-100 text-sm items-center gap-x-4  hover:bg-slate-800 rounded"
                            }>
                                <FcShare className="" size={40}></FcShare>
                                <span className={
                                    sideBarOpen ? activeClass : deactiveClass
                                }>SHARED</span>
                            </div>
                        </Link>
                    </li>
                    <li className="w-11/12 my-1">
                        <Link to="/profile">
                            <div className={
                                !sideBarOpen ? "flex p-2 cursor-pointer hover:text-slate-100 items-center gap-x-4  hover:bg-slate-800 rounded justify-center" : "flex p-2  cursor-pointer hover:text-slate-100 text-sm items-center gap-x-4  hover:bg-slate-800 rounded"
                            }>
                                <FcServices className="" size={40}></FcServices>
                                <span className={
                                    sideBarOpen ? activeClass : deactiveClass
                                }>PROFILE</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="my-5 flex flex-1 items-end">
                <ul className="flex flex-1 justify-center items-center">
                    <li className="w-11/12 my-1">
                        <button className="w-full" onClick={logout}>
                            <div className={
                                !sideBarOpen ? "flex p-2 cursor-pointer hover:text-slate-100 items-center gap-x-4  hover:bg-slate-800 rounded justify-center" : "flex p-2 cursor-pointer hover:text-slate-100 text-sm items-center gap-x-4  hover:bg-slate-800 rounded"
                            }>
                                <FcLock className="" size={40}></FcLock>
                                <span className={
                                    sideBarOpen ? activeClass : deactiveClass
                                }>LOG-OUT</span>
                            </div>
                        </button>
                    </li>
                </ul>


            </div>
        </div>
    </>)
}


export default SideBar;