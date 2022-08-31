import axios from "axios";
import APP_CONFIG from "../config";



const getProfile = async (token,username) => {
    try {
        let response = await axios({
            method: "GET",
            url: `https://${APP_CONFIG.API_URL}/api/getprofile/${username}`,
            headers: {'Authorization' : "Bearer " + token }
        })
        return response.data
    }
    catch (error) {
        return error.response.data
    }
}

export {getProfile}
