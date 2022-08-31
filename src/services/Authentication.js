import axios from "axios";
import APP_CONFIG from "../config";



const getcredentialsverified = async (data) => {
    const fdata = JSON.stringify(data)
    try {
        let response = await axios({
            method: "POST",
            url: `https://${APP_CONFIG.API_URL}/login`,
            data: fdata,
            headers: { 'Content-Type': 'application/json' }
        })
        return response.data
    }
    catch (error) {
        return error.response.data
    }
}


export {getcredentialsverified}


