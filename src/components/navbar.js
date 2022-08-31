import { FcStackOfPhotos } from "react-icons/fc";





const NavBar = (props) => {



    return (
        <div className="navbar fixed top-0 left-0 right-0 z-50 flex-none flex h-16 mb-16 justify-between items-center bg-slate-500 shadow-md">
            <div className="mx-2 flex h-16 items-center">
                <FcStackOfPhotos size={50}></FcStackOfPhotos>
                <span className="font-mono text-xl font-bold tracking-widest text-slate-100">PROSHOT</span>
            </div>
            <div className="flex-1 h-16 mx-2 flex items-center justify-between">
                <div><span className=" mx-5 font-mono text-xl font-bold tracking-widest text-slate-100">{props.albumName}</span></div>
            </div>
        </div>
    )

}


export default NavBar;