import { useEffect ,useState } from "react";
import axios from "axios";

const UseFetch = (url) => {
    const [ data, setData] = useState(null)
    const [ error, setError] = useState(null)
    const [ loading, setLoading] = useState(true)

    useEffect((url)=>{
        const fetchData = async() =>{
            setLoading(true)

            try {
                const res = await axios.get(url)
                const json = await res.data
              
                setData(json.data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    },[url])
    return {loading,error,data}
}
export default UseFetch