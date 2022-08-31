

import { useParams } from "react-router-dom";
import BasicGallery from "./album.basic.gallery";



const AlbumPhotos = () => {
    let params = useParams();
    return (<>
        <div className="main-content ml-40 mt-10 mr-20 peer-hover:ml-80 peer-hover:mr-8 duration-500 peer-hover:duration-1000 w-full">
            <BasicGallery albumId={params.albumId}></BasicGallery>
        </div>

    </>)
}


export default AlbumPhotos;