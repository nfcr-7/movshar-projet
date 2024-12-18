import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./movie.scss"
import { useParams } from "react-router-dom"


const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()
    const API_KEY = "a67b57849deb687f2cd49d7a8298b366";
    const BASE_URL = "https://api.themoviedb.org/3";
    const [trailerKey, setTrailerKey] = useState("");
    const [actors, setActors] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchActors = async () => {
            const API_KEY = "a67b57849deb687f2cd49d7a8298b366";
            const BASE_URL = "https://api.themoviedb.org/3";
            try {
                const response = await axios.get(
                    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
                );
                setActors(response.data.cast.slice(0, 5)); // Limiter à 8 acteurs
            } catch (error) {
                console.error("Erreur lors de la récupération des acteurs :", error);
            }
        };


        fetchActors();
    }, [id]);

    const handleActorClick = (actorId) => {
        navigate(`/actorDetails/${actorId}`);
    };


    useEffect(() => {
        const fetchTrailer = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
                const videos = response.data.results;
                const trailer = videos.find((video) => video.type === "Trailer" && video.site === "YouTube");
                if (trailer) {
                    setTrailerKey(trailer.key);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération de la bande-annonce :", error);
            }
        };
        fetchTrailer();
    }, [id]);

    useEffect(() => {
        getData()
        window.scrollTo(0, 0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average : ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                    ?
                                    currentMovieDetail.genres.map(genre => (
                                        <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                    ))
                                    :
                                    ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                    {/* Section Acteurs */}
                    <div className="actor">
                        {/* Section Acteurs */}
                        <h2>Acteurs principaux</h2><br/>
                        <div className="actor-wrapper" style={{ display: "flex", gap: "20px" }}>
                            {actors.map((actor) => (
                                <div
                                    className="actor-item"
                                    key={actor.id}
                                    style={{ textAlign: "center", cursor: "pointer" }}
                                    onClick={() => handleActorClick(actor.id)}

                                >
                                    <img
                                        src={
                                            actor.profile_path
                                                ? `http://image.tmdb.org/t/p/w200${actor.profile_path}`
                                                : "https://via.placeholder.com/200x300?text=No+Image"
                                        }
                                        alt={actor.name}
                                        style={{
                                            width: "150px",
                                            height: "225px",
                                            objectFit: "cover",
                                            borderRadius: "10px",
                                        }}
                                    />
                                    <h3 style={{ marginTop: "10px" }}>{actor.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div><br/>


                    {/* Section Bande-Annonce */}
                    {trailerKey && (
                        <div className="trailer-section" style={{ padding: "20px", textAlign: "center" }}>
                            <h2>Trailer</h2><br />
                            <iframe
                                width="100%"
                                height="500px"
                                src={`https://www.youtube.com/embed/${trailerKey}`}
                                title="Trailer"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}

                </div>
            </div>

            <div className="movie__links">
                <div className="movie__heading1">Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path
                                &&
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Movie