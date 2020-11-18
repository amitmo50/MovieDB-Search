import React, {useState} from 'react';
import './topBar.css';

const TopBar = ({performSearch}) => {
    const [text, setText] = useState('');
    return (
    <div className="topBar-container">
        <div className="topBar-icon">
            <img width="50" src="The-movie-database-01.svg" alt="movieDB-icon"/>
        </div>
        <div className="movieDB-title">
            <h1>MoviesDB Search</h1>
        </div>
        <div className="searchBar-container">
            <form className="search-form" action='/'>
                <input onChange={(e) => setText(e.target.value)} value={text} type="text" placeholder="Enter Movie Name"/>
                <button onClick={(e) => 
                {e.preventDefault(); 
                    performSearch(text)}} 
                type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>

    </div>);

}
export default TopBar;