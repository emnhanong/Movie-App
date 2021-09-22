import React from 'react';
import "./Movie.css";

const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const NOT_IMG = 'https://images-na.ssl-images-amazon.com/images/I/61cUnhHPGvL._AC_SX522_.jpg';

const setVote = (vote) => {
    if(vote >= 8){
        return "green";
    }
    else if(vote >= 6){
        return "yellow";
    } 
    else{
        return "red";
    }
}

const Movie = ({movies}) => (
    
            movies.map((item)=>
                <div key={item.id} className="movies">
                    <div className="wrap">
                        <img src = {item.poster_path ? IMG_API + item.poster_path : NOT_IMG} alt = {item.title} />
                        <div className="review">
                                <p className="text">REVIEW</p> 
                                <p>{item.overview ? item.overview : "There are no reviews for this movie yet"}</p>
                        </div>
                    </div>

                    <div className="movies-content">
                        <div className="movies-info">
                            <h3>{item.title}</h3>
                            <p className={`vote-movie ${setVote(item.vote_average)}`} > {item.vote_average}</p>
                        </div>   
                    </div>
                </div>
            )       
)

export default Movie;