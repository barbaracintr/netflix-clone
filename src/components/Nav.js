import './Nav.css'
import netflix from '../img/netflix-logo.png'
import avatar from '../img/avatar-profil.png'
import { useEffect, useState } from 'react'

function Nav() {

    const [ show, setShow ] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setShow(window.scrollY > 100)
        })
    }, [])
    
    return (
        <div className={`nav-container ${show && 'nav-container-black'}`}>
            <img className='nav-logo' alt='Logo da Netflix' src={netflix} />
            <img className='nav-avatar' alt='Icone de avatar' src={avatar} />
        </div>
    )
}

export default Nav