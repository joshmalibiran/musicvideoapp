import axios from 'axios'
import { Buffer } from 'buffer';


export default  {

    getTheToken()   {
        const clientId ='60064fa482034b079e2c478ff5d06725'
        const clientSecret = '17280e67fa8d4e6eb199c011421bf9c3' 

        const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
        return axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
        headers: {
            'Authorization' : `Basic ${authHeader}`,
            'Content-Type' : 'application/x-www-form-urlencoded'
        }
    })
    }, 

    getGenres(token) {
        return axios.get('https://api.spotify.com/v1/browse/categories',{
            headers:    {
                Authorization : `Bearer ${token}`
            }
        })
    },

    getPlaylistByGenre(token, genre)   {
        return axios.get(`https://api.spotify.com/v1/browse/categories/${genre}/playlists`,{
            headers:    {
                Authorization : `Bearer ${token}`
            }
        })
    },

    getTracksByPlaylist(token, playlistId)  {
        return axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,{
            headers:    {
                Authorization: `Bearer ${token}`
            }
        })
    },

    searchResults(token, searchTerm)   {
        return axios.get(`https://api.spotify.com/v1/search?type=playlist,artist,album&q=${searchTerm}&limit=50`,{
            headers:    {
                Authorization: `Bearer ${token}`
            }
        })
    },

    getAlbumsByArtist(token, id)    {
        return axios.get(`https://api.spotify.com/v1/artists/${id}/albums`,{
            headers:    {
                Authorization: `Bearer ${token}`
            }
        })
    },

    getArtist(token, id)    {
        return axios.get(`https://api.spotify.com/v1/artists/${id}`,{
            headers:    {
                Authorization: `Bearer ${token}`
            }
        })
    },

    getTracksByAlbum(token, id) {
        return axios.get(`https://api.spotify.com/v1/albums/${id}/tracks`,{
            headers:    {
                Authorization: `Bearer ${token}`
            }
        })
    },

    getTrackByTrackid(token, id){
        return axios.get(`https://api.spotify.com/v1/tracks/${id}`,{
            headers:    {
                Authorization: `Bearer ${token}`
            }
        })
    },

    getRecommendedTracks(token, artistid, trackid)    {
        let url = `https://api.spotify.com/v1/recommendations?seed_artists=${artistid}`
        for(let i = 0; i < trackid.length; i++) {
            url += `&seed_tracks=${trackid[i]}`
        }

        return axios.get(url,{
            headers:    {
                Authorization: `Bearer ${token}`
            }
        })
    },


    getUserInfo(token)  {
        return axios.get(`https://api.spotify.com/v1/me`,{
            headers:    {
                Authorization: `Bearer ${token}`
            }
        })
    }

}