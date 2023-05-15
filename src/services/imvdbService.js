import axios from 'axios'

export default{
    search(searchTerm) {
        return axios.get(`http://localhost:8080/api/v1/search/videos?q=${searchTerm}`,  {
            headers:    {
                /* 'Access-Control-Allow-Origin': '*', */
            }
        })
    },
    getVideoById(id)    {
        /* const key = '8SNXf8ErCigUh9Ja2CRWYdNSy7iIHD1D9SbUzt89' */
        return axios.get(`http://localhost:8080/api/v1/video/${id}?include=sources`,{
            headers:    {
                /* 'IMVDB-APP-KEY': `${key}` */
                /* 'Access-Control-Allow-Origin': '*', */
            }
        })
    }

}