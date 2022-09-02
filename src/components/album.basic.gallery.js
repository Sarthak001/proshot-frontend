import React, { useState, useRef, useCallback, useEffect } from 'react'
import { AuthStore } from "../store/authstore";
import { useRecoilValue } from 'recoil';
import APP_CONFIG from "../config";

import GG from '../services/photo.service'

export default function BasicGallery(props) {
    const auth = useRecoilValue(AuthStore)
    const [albumId, setAlbumId] = useState("")
    const [pageNumber, setPageNumber] = useState(null)
    const {
        imgs,
        hasMore,
        loading,
        error
    } = GG(albumId, pageNumber, auth.token)


    useEffect(() => {
        setAlbumId(props.albumId)
        setPageNumber(1)
    }, [props.albumId])

    const test = (photoId) => {
        return `https://${APP_CONFIG.API_URL}/protected/${photoId}?token=${auth.imageToken}`
    }



    const observer = useRef()
    const lastImgElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    const openup = (e)=>{
        const imgUrl = e.target.currentSrc
        window.open(imgUrl, '_blank');

    }


    return (
        <>
            <div className="columns-1 md:columns-3 lg:columns-3 xl:columns-4">

                {imgs.map((img, index) => {
                    if (imgs.length === index + 1) {
                        return (
                            <img onClick={openup} className="hover:scale-105 duration-300 mb-4" ref={lastImgElementRef} alt={img.fileName} key={index} src={test(img.photoId)}></img>
                        )
                    } else {
                        return (
                            <img onClick={openup} className="hover:scale-105 duration-300 mb-4" alt={img.fileName} key={index} src={test(img.photoId)}></img>
                        )
                    }
                })}
            </div>
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
        </>
    )
}
