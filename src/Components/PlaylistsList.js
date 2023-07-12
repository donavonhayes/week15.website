import React from "react";
import { PlayList } from './Playlist'


export class PlaylistsList extends React.Component {
    state = {
        playlists: []
    };

    componentDidMount() {
        this.fetchPlaylists();
    }

    



    render() {
        return (
            <div className="Playlist-list">
                {this.state.playlists.map((playlist) => (
                    <PlayList
                        playlist={playlist}
                        key={playlist._id}
                        updatePlaylist= {this.updatePlaylist}
                        />
                ))}
            </div>
        )
    }
}