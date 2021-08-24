import React from 'react';
import './Playlist.css'

class Playlist extends React.Component {
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}