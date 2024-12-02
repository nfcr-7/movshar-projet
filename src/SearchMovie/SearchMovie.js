import React, { useState, useEffect } from "react";
import axios from "axios";
import "./searchMovie.scss";
// import Movie from "../Movie/Movie";

const SearchMovie = () => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${query}`)
        .then((res) => setData(res.data.results));
    }, [query]);

    const onSearch = (e) => {
        setQuery(e.target.value)
    }

    console.log(query);

    return (
        <div className="searchMovie">
            <div className="input-container">
                <input
                   placeholder="Rechercher"
                   onChange={onSearch}
                />
            </div>
            {/* {query ? (
                <div className="p">
                    {data.map((m) => (
                        <Movie movie={m} key={m.id} />
                    ))}
                </div>
            ) : (
                <div className="placeholer-container">
                    <p></p>
                    <p>Rien à afficher, veuillez entrer un mot clé</p>
                </div>
            )} */}
            
        </div>   
    )
}


export default SearchMovie;
