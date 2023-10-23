import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../images/LOGO.svg"

export default function SiteHeader() {
    return (
        <div className='siteheader'>
            <img className='logo' src = {logo} alt="JAKOBY.io logo"/>
            <div className='menu'>
                <Link className='menulink basicLink projectsLink' to={'#Projects'}>Projects</Link>
                <Link className='menulink basicLink aboutLink' to={'#About'}>Studio</Link>
                <Link className='menulink basicLink contactLink' to={'#Contact'}>Contact</Link>
            </div>
            <div className='language'>
                    <Link className='languageselector' to={'#'}>CZ</Link>
                    <p className='languageselector'>/</p>
                    <Link className='languageselector' to={'#'}>EN</Link>
                </div>
        </div>
    )
}
