import React from 'react';
import Image from '../images/toppng.com-troll-face-meme-png-troll-meme-face-1328x1081.png'

export function Header(){
    return(
        <div className='header'>
            <div className='logo'>
                <img src={Image} alt='Logo'/>
                <h2>Meme Generator</h2>
            </div>
            <h4>React Course - Project 3</h4>
        </div>
    );
}

export default Header;