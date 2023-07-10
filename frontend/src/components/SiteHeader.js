import React from 'react'
import {Link} from 'react-router-dom'

export default function SiteHeader() {
    return (
        <div className='siteheader'>
            <div className='logo'>LOGO</div>
            <div className='menu'>
                <Link className='menulink' to={'#Projects'}>Projects</Link>
                <Link className='menulink' to={'#About'}>Studio</Link>
                <Link className='menulink' to={'#Contact'}>Contact</Link>
            </div>
            <div className='language'>
                    <Link className='languageselector' to={'#'}>CZ</Link>
                    <p className='languageselector'>/</p>
                    <Link className='languageselector' to={'#'}>EN</Link>
                </div>
        </div>
    )
}
