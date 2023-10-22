import axios from "axios";
import { BACKEND_ENDPOINT } from "../utils/constant";

export const getTopAlbums = async (slug) => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}${slug}`)
        return response.data
    } catch (error) {
        console.error(error);
    }
}
