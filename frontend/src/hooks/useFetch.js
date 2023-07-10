import {useEffect, useState} from "react"

const useFetch = (url) => {
    const [data,
        setdata] = useState(null)
    const [error,
        seterror] = useState(null)
    const [loading,
        setloading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            setloading(true)

            try {
                const res = await fetch(url)
                const json = await res.json()
                setdata(json)
                setloading(false)
            } catch (error) {
                seterror(error)
                setloading(false)

            }
        }
        fetchData()

    }, [url])
    console.log(data)
    return {loading, error, data}

}

export default useFetch