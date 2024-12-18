import React from 'react'
import './movieShow.scss'
import '../card/card.scss'

const movieShow = (props) => {

    const { movie, onClickMovie } = props;

  return (
    <div>
      <div className="movie" onClick={onClickMovie}>
            <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}/>
            <div className="conteneur">
                <li>{movie.original_title}</li>
            </div>  
        </div>   
    </div>
  )
}

export default movieShow;
