import React from "react";
import { PlayList } from './Playlist'


export class PlaylistsList extends React.Component {
    state = {
        playlists: []
    };

    componentDidMount() {
        this.fetchPlaylists();
    }

    fetchPlaylists = async () => {
        const playlists = await PlaylistsApi.get();
        this.setState({ playlists });
    };

    updatePlaylist = async (updatedPlaylist) => {
        await PlaylistsApi.put(updatedPlaylist);
        this.fetchPlaylists();
    };

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