const apiURL = "http://lab.invasikode.com:30000"
function userToken() {
    return `Bearer ${window.localStorage.getItem('token')}`
}

export {apiURL,userToken}