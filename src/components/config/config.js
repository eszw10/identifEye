const apiURL = "http://lab.invasikode.com:8080"
function userToken() {
    return `Bearer ${window.localStorage.getItem('token')}`
}

export {apiURL,userToken}