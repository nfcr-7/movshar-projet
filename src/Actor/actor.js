import React, { useEffect, useState } from "react";
import axios from "axios";
import "./actor.scss";
import ActorDetails from "../ActorDetails/ActorDetails";
import "../ActorDetails/ActorDetails.scss"
import "../card/card.scss";
import "../MovieList/MovieList";
import "../card/card.scss"
import "../MovieList/MovieList.scss";
import ActorCard from "./actorCard";
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";

const Actor = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams()
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

  const API_KEY = "0ed827427b1f499fd2705dc3f4cd8214";
  const BASE_URL = "https://api.themoviedb.org/3";
  const [selectedActor, setSelectedActor] = useState(null);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/person/popular`, {
          params: {
            api_key: API_KEY,
            language: "en-US",
            page: 1,
          },
        });
        setActors(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        setLoading(false);
      }
    };

    fetchActors();
  }, []);

  return (
    <div className="actor-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        actors.map((actorId) => (
          <ActorCard
            key={actorId.id}
            onClick={() => handleActorClick(actorId.id)}
            // className="actor-button"
            name={actorId.name}
            profilePath={actorId.profile_path}
            popularity={actorId.popularity}
          />
        ))
      )}
      {/* <div className="">
        {handleActorClick && <ActorDetails actorId={handleActorClick} />}
      </div> */}
    </div>
  );
};

export default Actor;
