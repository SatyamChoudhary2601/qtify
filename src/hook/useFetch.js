import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const getData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get(url)
            setData(response.data)
        } catch (error) {
            setError(error)
            console.error(error);
        }
        setIsLoading(false)
    }
    useEffect(() => {
        getData()
    }, [url])
    return { data, isLoading, error }
}
export default useFetch