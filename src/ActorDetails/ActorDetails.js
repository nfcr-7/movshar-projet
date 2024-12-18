import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaChevronRight } from "react-icons/fa";
import "./ActorDetails.scss";
import { useNavigate } from "react-router-dom"



const ActorDetails = () => {
    const { id } = useParams(); // Récupère l'ID de l'acteur depuis l'URL
    const [actor, setActor] = useState({});
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();


    const handleActorClick = (actorId) => {
        navigate(`/movie/${actorId}`);
    };

    const API_KEY = "a67b57849deb687f2cd49d7a8298b366";
    const BASE_URL = "https://api.themoviedb.org/3";

    useEffect(() => {
        // Récupère les détails de l'acteur
        axios.get(`${BASE_URL}/person/${id}?api_key=${API_KEY}&language=en-US`)
            .then((res) => {
                setActor(res.data);
            })
            .catch((error) => console.error("Erreur lors de la récupération de l'acteur :", error));

        // Récupère les films de l'acteur
        axios.get(`${BASE_URL}/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`)
            .then((res) => {
                setMovies(res.data.cast);
            })
            .catch((error) => console.error("Erreur lors de la récupération des films :", error));
    }, [id]);

    const [showFullBio, setShowFullBio] = useState(false);

    const truncateText = (text, maxLength) => {
        if (!text) return ""; // Si le texte est indéfini, retourner une chaîne vide
        if (text.length > maxLength) {
            return `${text.substring(0, maxLength)}...`;
        }
        return text;
    };



    return (

        <React.Fragment>
            {/* <Navigation2 /> */}
            <div className="actor-details">

                <div className="actor-head">
                    <div className="actor-pic left">
                        <img
                            src={`http://image.tmdb.org/t/p/original${actor.profile_path}`}
                            alt={actor.name}
                        />
                    </div>
                    <div className="actor-info right">
                        <h2>{actor.name}</h2>

                        {/* {actor.biography.length > 300 && (
                        <button
                            onClick={() => setShowFullBio(!showFullBio)}
                            style={{ marginTop: "10px", cursor: "pointer" }}
                        >
                            {showFullBio ? "Voir moins" : "Lire plus"}
                        </button>
                    )} */}

                        {actor.biography && (
                            <>
                                <p>
                                    {showFullBio
                                        ? actor.biography
                                        : truncateText(actor.biography, 300)}
                                </p>
                                {actor.biography.length > 300 && (
                                    <button
                                        onClick={() => setShowFullBio(!showFullBio)}
                                        style={{ marginTop: "10px", cursor: "pointer" }}
                                    >
                                        {showFullBio ? "Voir moins" : "Lire plus"}
                                    </button>
                                )}
                            </>
                        )}


                        <div className="info-line">
                            <div className="left">
                                <span>Genre</span>
                                <p>{actor.gender === 1 ? "Femme" : "Homme"}</p>
                            </div>
                            <span class="material-symbols-outlined">
                                <FaChevronRight />
                            </span>

                        </div>
                        <div className="info-line">
                            <div className="left">
                                <span>Date de naissance</span>
                                <p>{actor.birthday}</p>
                            </div>
                            <span class="material-symbols-outlined">
                                <FaChevronRight />
                            </span>

                        </div>
                        <div className="info-line">
                            <div className="left">
                                <span>Lieu de naissance</span>
                                <p>{actor.place_of_birth}</p>
                            </div>
                            <span class="material-symbols-outlined">
                                <FaChevronRight />
                            </span>

                        </div>
                    </div>
                </div>

                <div className="films-reco">
                    <div className="head">
                        <h2>Il a joué dans</h2>
                        <div className="see-all">
                            <a href="">Voir tous les films</a>
                            <span class="material-symbols-outlined">
                                <FaChevronRight />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="actor-movies">
                    <div className="movie-list" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                        {movies.slice(0, 8).map((movie) => (
                            <div key={movie.id} style={{
                                width: "150px",
                                textAlign: "center"
                            }}>
                                <img
                                    src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    alt={movie.title}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        borderRadius: "5px"
                                    }}
                                    onClick={() => handleActorClick(movie.id)}
                                />
                                <p>{movie.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default ActorDetails;