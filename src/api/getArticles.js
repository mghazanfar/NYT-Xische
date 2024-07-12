import axios from "axios"
import { apiKey, baseUrl } from "../constants"

export const getArticles = () => {
    const getArticlesEndpoint = `${baseUrl}/viewed/1.json?api-key=${apiKey}`
    return axios.get(getArticlesEndpoint)
}