import axios from "axios";
import APP_CONFIG from "../config";



const getAlbums = async (token) => {
    try {
        let response = await axios({
            method: "GET",

            url: `https://${APP_CONFIG.API_URL}/api/getalbums`,
            headers: {'Authorization' : "Bearer " + token }
        })
        return response.data
    }
    catch (error) {
        return error.response.data
    }
}


const getSharedAlbums = async (token) => {
    try {
        let response = await axios({
            method: "GET",
            url: `https://${APP_CONFIG.API_URL}/api/getsharedalbums`,
            headers: {'Authorization' : "Bearer " + token }
        })
        return response.data
    }
    catch (error) {
        return error.response.data
    }
}



export {getAlbums,getSharedAlbums}


