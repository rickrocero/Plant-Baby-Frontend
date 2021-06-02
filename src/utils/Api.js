const axios = require("axios")
//deployed
// const URL_PREFIX = "deployed backend http"

// LOCAL
const URL_PREFIX = "http://localhost:3001"

const API = {
    login: function (userData) {
        return axios.post(`${URL_PREFIX}/api/login`, userData)
    },
    signup: function (userData) {
        return axios.post(`${URL_PREFIX}/api/signup`, userData)
    },
    getUser: function (token) {
        return axios.get(`${URL_PREFIX}/api/profile`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
    },
    imageLoad: function(image) {
        return new Promise((resolve, reject) => {
             axios.post(`${URL_PREFIX}/api/search`, image).then(res => resolve(res.data, err => reject(err)))
        })
    },
    logOut: function() {
        return axios.get(`${URL_PREFIX}/api/logout`)
    }
}

export default API