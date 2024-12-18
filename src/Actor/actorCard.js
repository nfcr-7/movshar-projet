import React from "react";
import "./actor.scss";
import "../ActorDetails/ActorDetails";
import "../ActorDetails/ActorDetails.scss";
import { Link, useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"


const ActorCard = ({ actorId, name, profilePath, popularity }) => {
  const navigate = useNavigate();

  const handleActorClick = () => {
      navigate(`/actorDetails/${actorId}`);
  };

  const imageUrl = profilePath
    ? `https://image.tmdb.org/t/p/w500${profilePath}`
    : "https://via.placeholder.com/150";

  return (
      <div className="actor-card" onClick={handleActorClick}>
        <img src={imageUrl} alt={name} className="actor-image" />
        <div className="actor-details">
          <h3 className="actor-name">{name || "Unknown Actor"}</h3>
          <p className="actor-popularity">
            Popularity: {popularity ? popularity.toFixed(1) : "N/A"}
          </p>
        </div>
      </div>
  );
};


export default ActorCard;