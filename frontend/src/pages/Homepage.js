import React from 'react'
import useFetch from '../hooks/useFetch'
import {Link} from 'react-router-dom'

export default function Homepage() {
    const {loading, error, data} = useFetch(process.env.REACT_APP_URL_ALL_PROJECTS)

    if (loading) 
        return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error :
        </p>
    }

    return (
        <div className='project-container'>
            {data
                .data
                .map(project => (
                    <div key={project.id} className='project-card'>
                        <Link key={project.id} to={`/project/${project.id}`} >
                            <>
                            {/* <img src={`http://localhost:1337`+ project.attributes.cover_image.data.attributes.formats.thumbnail.url }/> */}
                            {/* <img src={`http://localhost:1337`+ project.attributes.cover_image.data.attributes.formats.small.url }/> */}
                            <img src={`http://localhost:1337`+ project.attributes.cover_image.data.attributes.formats.medium.url }/>
                            {/* <img src={`http://localhost:1337`+ project.attributes.cover_image.data.attributes.formats.large.url }/>
                            <img src={`http://localhost:1337`+ project.attributes.cover_image.data.attributes.url }/> */}


                            <div className='title overlay'>{project.attributes.title}</div>
                            {/* <div className='subtitle'>{project.attributes.subtitle}</div>
                            <div className='stage'>{project.attributes.stage}</div>
                            <div className='team'>{project.attributes.team}</div>
                            <div className='decsription'>{project.attributes.decsription}</div> */}
                        </>
                    </Link>
                </div>
                ))} 
        </div>

    )
} 