import axios from 'axios'


const key = "AIzaSyDXIDHSjHuSzd4qjNdri1vbHtlnoyD9eJE"
export default{

    getVideoByName(searchTerm)    {
        return axios.get(`https://www.googleapis.com/youtube/v3/search?key=${key}&q=${searchTerm}&type=video&part=snippet`)
    }

}