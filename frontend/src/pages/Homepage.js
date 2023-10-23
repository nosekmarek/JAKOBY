import React, { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import {Link} from 'react-router-dom'
import About from '../components/About'
import { useInView } from "framer-motion"


export default function Homepage() {
    const {loading, error, data} = useFetch(process.env.REACT_APP_URL_ALL_PROJECTS)

    if (loading) 
        return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error :
        </p>
    }
    const randomlysortedprojects = data.data.sort(() => Math.random() - 0.5)



    

// #TODO add class to backend


    return (
        <>
       
        <div className='project-container'>
            {randomlysortedprojects.map(project => (
                        <Link key={project.id} to={`/project/${project.id}`} className='project-card'>
            
                            <>
                            <div className='imageContainer'>
                            {/* <img src={`http://localhost:1337`+ project.attributes.cover_image.data.attributes.formats.thumbnail.url }/> */}
                            {/* <img src={`http://localhost:1337`+ project.attributes.cover_image.data.attributes.formats.small.url }/> */}
                            <img className='projectImage' src={process.env.REACT_APP_URL_BACKEND_API + project.attributes.cover_image.data.attributes.formats.medium.url }/></div>
                            {/* <img src={`http://localhost:1337`+ project.attributes.cover_image.data.attributes.formats.large.url }/>
                            <img src={`http://localhost:1337`+ project.attributes.cover_image.data.attributes.url }/> */}
                            
                            <div className='descriptionContainer'>
                            <div className={`title projectLink ${project.attributes.subtitle}`}>{project.attributes.title}</div>
                            <div className='year'>{project.attributes.year}</div>
                            <div className='gap'> | </div>
                            <div className='subtitle'>{project.attributes.subtitle}</div>
                            <div className='gap'> | </div>
                            <div className='stage'>{project.attributes.stage}</div>
                            {/* <div className='team'>{project.attributes.team}</div> */}
                            {/* <div className='decsription'>{project.attributes.decsription}</div> */}
                            </div>
                        </>
                    </Link>
              
                ))} 
        </div>
        <div className='fakebox'></div>
        </>

    )
} 