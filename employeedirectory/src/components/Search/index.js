import React from "react";
import "./style.css";

function Search() {
    return (
        <div className="container">
        <div className="mb-3">
            <input type="text" className="form-control mt-2" id="searchInput" placeholder="Search for an Employee!"></input>
        </div>
        <button type="button" className="btn btn-success mb-2" id="searchButton">Search</button>
        </div>
    )
}

export default Search;