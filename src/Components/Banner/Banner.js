import React,{useEffect, useState} from 'react'
import axios from '../../axios'
import { imageUrl } from '../../Constants/constants'
import { API_KEY } from '../../Constants/constants'
import './Banner.css'

function Banner() {
    const [Movie, setMovie] = useState([])
    
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data);
        setMovie(response.data.results[7])
        })
    }, [])
    return (
        <div className='banner'
        style={{backgroundImage:`url(${Movie ? imageUrl+Movie.backdrop_path : ""})`}} >
            <div className="content">
                <h1 className='title'>{Movie ? Movie.title :""}</h1>
                <div className="banner_buttons">
                    <button className='button'>Play</button>
                    <button className="button">My list</button>
                </div>
                <div className="description">
                    <h1>{Movie ? Movie.overview :""}</h1>
                </div>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
