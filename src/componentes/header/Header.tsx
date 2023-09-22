import './Header.css'
import Link from './../link/Link'
import React from 'react'
function Header(){
    return(
        <header>

            
            <div>
            <img src= 'logo.png' alt="Logo"></img>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link texto='Home'/>
                    </li>
                    <li>
                        <Link texto='Notícia'/>
                    </li>
                    <li>
                        <Link texto='Sobre'/>
                    </li>
                    <li>
                        <Link texto='Contatos'/>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header