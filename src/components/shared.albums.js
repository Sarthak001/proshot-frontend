import { useEffect, useState } from "react";
import DashboardAlbumsCard from "./dashboard.albums.card";
import { AuthStore } from "../store/authstore";
import { useRecoilValue } from 'recoil';
import { getSharedAlbums } from "../services/album.service";

const DashboardSharedAlbums = () => {
    const auth = useRecoilValue(AuthStore)
    const [sharedAlbums, setSharedAlbums] = useState([])

    useEffect(() => {
        const fetchAlbums = async () => {
            const response = await getSharedAlbums(auth.token)
            if (response.statusCode === 200) {
                setSharedAlbums([...response.Albums])
                return
            }
            alert("error")
        }    
        fetchAlbums()
    },[auth.token])



    return (
        <div className="main-content ml-40 peer-hover:ml-72 duration-500 peer-hover:duration-1000 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                sharedAlbums.length > 0 &&
                sharedAlbums.map((album,index) =>{
                    return(
                        <DashboardAlbumsCard key={index} albumInfo={album}  />
                    )
                })
            }
        </div>
    )
}


export default DashboardSharedAlbums;