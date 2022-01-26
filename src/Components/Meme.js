import {React, useState} from "react";
import { FaImage } from 'react-icons/fa';
import memesData from "../memesData";

export function Meme(){
    const [meme, setMeme] = useState({topText: "", bottomText: "", randomImage: "https://rankedbyvotes.com/wp-content/uploads/Flying-Machine.jpg"});
    const [allMemeImages, setAllMemeImages] = useState(memesData);
    function getImage(){
        setMeme((prevState) =>{
            return {
                ...prevState,
                randomImage: allMemeImages[Math.floor(Math.random()*allMemeImages.length)].url
            }
        })
    }
    
    return (
        <div className="meme">
            <div className="form">
                <div className="inputs">
                    <input type="text" className="input-1"/>
                    <input type="text" className="input-2"/>
                </div>
                <button onClick={getImage} type="submit">Get a new meme image <i className="icon"><FaImage /></i></button>
            </div>
            <img src={meme.randomImage} alt="Meme"/>
        </div>
    );
}

export default Meme;