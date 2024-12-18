import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieN from "../MovieN/MovieN";
import "../MovieN/MovieN.scss";
import "./CategoriesMovies.scss";

const CategoriesMovies = () => {


    const [categories, setCategories] = useState([]);
    const [data, setData] = useState([]);
    const [id, setId] = useState();

    // const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US")
            .then((res) => setCategories(res.data.genres));

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&with_genres=${id}`)
            .then((res) => setData(res.data.results))
    }, [id]);

    const onChange = (e) => {
        setId(e.target.value);
    }


    return (
        <div className="categories">

            <div className="head">
                <h2>Catégories</h2>
                <div className="categoriesMovies">
                    <select onChange={onChange}>
                        <option>Veuillez sélectionner une catégorie</option>
                        {categories.map(g => {
                            return (
                                <option value={g.id}>{g.name}</option>
                            )
                        })}
                    </select>

                </div>

            </div>

            <div className="result-movies">
                {id ? (
                    <ul className="popularMovies genre">
                        {data.map((m) => (
                            <MovieN movie={m} key={m.id} />
                        ))}
                    </ul>
                ) : (
                    <div className="placeholer-container">
                        <h2>Rien à afficher, veuillez sélectionner une catégorie</h2>
                    </div>
                )}
            </div>

            <div className="pagination">
                <button onClick={() => setPage(1)}>Go to first</button>
                <button onClick={() => {
                    (page == 1) ? (window.alert("No previous page")) : (setPage(page - 1))
                }
                }>Previous</button>
                <button onClick={() => {
                    (page == 500) ? (window.alert("No next page")) : (setPage(page + 1))
                }
                }>Next</button>
                <button onClick={() => setPage(500)}>Go to last</button>
            </div>
        </div>
    )
}


export default CategoriesMovies;