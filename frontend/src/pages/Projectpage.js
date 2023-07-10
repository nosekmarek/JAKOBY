import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function Projectpage() {
    const {id} = useParams()
    const {loading, error, data} = useFetch(process.env.REACT_APP_URL_ALL_PROJECT_BY_ID + id + '?populate=*')

    if (loading) 
        return <p>Loading...</p>
    if (error) 
        return <p>Error :</p>

    return (
        <div className='projectWrapper'>
            <img
                src={process.env.REACT_APP_URL_BACKEND_API + data.data.attributes.cover_image.data.attributes.url}/>
            <div className='title'>{data.data.attributes.title}</div>
            <div className='subtitle'>{data.data.attributes.subtitle}</div>
            <div className='stage'>{data.data.attributes.stage}</div>
            <div className='team'>{data.data.attributes.team}</div>
            <div className='description'>{data.data.attributes.description}</div >
        </div>
    )
}