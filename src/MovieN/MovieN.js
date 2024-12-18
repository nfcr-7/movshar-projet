import React from "react";
import "./MovieN.scss";
import { Link } from "react-router-dom";

const MovieN = (props) => {

    const { movie, onClickMovie } = props;    // let numbers = movie.genre_ids;

    function getCategoriesByNumbers(numbers) {
        let categories = [];
        numbers.forEach(number => {
            switch (number) {
                case 28:
                    categories.push("Action ");
                    break;
                case 12:
                    categories.push("Adventure ");
                    break;
                case 16:
                    categories.push("Animation ");
                    break;
                case 35:
                    categories.push("Comedy ");
                    break;
                case 80:
                    categories.push("Crime ");
                    break;
                case 99:
                    categories.push("Documentary ");
                    break;
                case 18:
                    categories.push("Drama ");
                    break;
                case 10751:
                    categories.push("Family ");
                    break;
                case 14:
                    categories.push("Fantasy ");
                    break;
                case 36:
                    categories.push("History ");
                    break;
                case 27:
                    categories.push("Horror ");
                    break;
                case 10402:
                    categories.push("Music ");
                    break;
                case 9648:
                    categories.push("Mystery ");
                    break;
                case 10749:
                    categories.push("Romance ");
                    break;
                case 878:
                    categories.push("Science Fiction ");
                    break;
                case 10770:
                    categories.push("TV Movie ");
                    break;
                case 53:
                    categories.push("Thriller ");
                    break;
                case 10752:
                    categories.push("War ");
                    break;
                case 37:
                    categories.push("Western ");
                    break;
                default:
                    categories.push("Unknown ");
            }
        });
        return categories;
    }


    return (
        <Link to={`/movie/${movie.id}`}  style={{ textDecoration: "none", color: "white" }}>
            <div className="movieN">
                <img className="posterN" src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} />
                <div className="conteneurN">
                    <p className="movie_titleN">{movie.original_title}</p>
                    <div className="date_noteN">
                        <p>{movie.release_date}</p>
                        <p>{movie.vote_average} / 10</p>
                    </div>
                    <p>{getCategoriesByNumbers(movie.genre_ids)} </p>

                </div>
            </div>
        </Link>
    )
}

export default MovieN;