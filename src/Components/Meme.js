import {React, useEffect, useState} from "react";
import { FaImage } from 'react-icons/fa';

export function Meme(){

    const [meme, setMeme] = useState(
        {
            topText: "", 
            bottomText: "", 
            randomImage: "https://rankedbyvotes.com/wp-content/uploads/Flying-Machine.jpg"
        }
    );

    const [allMemes, setAllMemes] = useState({});

    useEffect(() =>{
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
        
        /*fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
        */
    }, [])

    function getImage(){
        setMeme((prevState) =>{
            return {
                ...prevState,
                randomImage: allMemes[Math.floor(Math.random()*allMemes.length)].url
            }
        })
    }

    function handleChange(event){
        setMeme(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    
    return (
        <div className="meme">
            <div className="form">
                <div className="inputs">
                    <input type="text" className="input-1" placeholder="Top Text" name="topText" value={meme.topText} 
                        onChange={handleChange}/>
                    <input type="text" className="input-2" placeholder="Bottom Text" name="bottomText" value={meme.bottomText} 
                        onChange={handleChange}/>
                </div>
                <button onClick={getImage} type="submit">Get a new meme image <i className="icon"><FaImage /></i></button>
            </div>
            <div className="memeImage">
                <img src={meme.randomImage} alt="Meme"/>
                <h1 className="topWords">{meme.topText}</h1>
                <h1 className="bottomWords">{meme.bottomText}</h1>
            </div>
        </div>
    );
}

export default Meme;