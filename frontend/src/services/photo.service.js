import { useEffect, useState } from 'react';
import axios from 'axios';
import APP_CONFIG from "../config";


export default function GG (albumId,pageNumber,token) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [imgs, setImgs] = useState([])
    const [hasMore, setHasMore] = useState(false)
    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        if (albumId !=="" && pageNumber !== null){
        axios({
            method: "GET",
            url: `https://${APP_CONFIG.API_URL}/api/getalbumdata/` + albumId,
            params: { page: pageNumber, limit: 10 },
            headers: { 'Authorization': "Bearer " + token, 'Content-Type': 'application/json' },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setImgs(previmgs => {
                return [...new Set([...previmgs, ...res.data.photos])]
            })
            setHasMore(res.data.photos.length > 0)
            setLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
    
        return () => cancel()
    }
    }, [pageNumber,token,albumId])

    return { loading, error, imgs, hasMore }
}