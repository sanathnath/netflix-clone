import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './Posters.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/constants'

function Posters(props) {
    const [Movies, setMovies] = useState([])
    const [urlId, seturlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            setMovies(response.data.results)
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie = (id)=>{
          console.log(id);
          axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
              console.log(response.data);
              if(response.data.results.length!==0){
                  seturlId(response.data.results[0])
                }else{
                    console.log('Array empty');
                }

          })
      }
  
    return (
        <div className='row'>
            <h3>{props.title}</h3>
            <div className="posters">
                {Movies.map((obj)=>
                    
                    <img onClick={()=>{handleMovie(obj.id); console.log("clicked",obj.id);}} className={ props.originals ? 'poster' : 'smallposters' } src={`${imageUrl+obj.poster_path}`} alt="" />
                    
                )}
                
            </div>
           { urlId && <YouTube videoId={urlId.key} opts={opts}  /> }

        </div>
    )
}

export default Posters
