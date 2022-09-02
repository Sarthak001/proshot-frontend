import { useEffect, useState } from "react";
import DashboardAlbumsCard from "./dashboard.albums.card";
import { AuthStore } from "../store/authstore";
import { useRecoilValue } from 'recoil';
import { getAlbums } from "../services/album.service";

const DashboardAlbums = () => {
    const auth = useRecoilValue(AuthStore)
    const [albums, setAlbums] = useState([])


    useEffect(() => {
        const fetchAlbums = async () => {
            const response = await getAlbums(auth.token)
            if (response.statusCode === 200) {
                setAlbums([...response.Albums])
            }
        }
        fetchAlbums()
    },[auth.token])
    return (
        <div className="main-content ml-40 peer-hover:ml-72 duration-500 peer-hover:duration-1000 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                albums.length > 0 &&
                albums.map((album,index) =>{
                    return(
                        <DashboardAlbumsCard key={index} albumInfo={album}  />
                    )
                })
            }
        </div>
    )
}


export default DashboardAlbums;