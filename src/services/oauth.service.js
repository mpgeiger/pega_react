const contentType = 'application/x-www-form-urlencoded';

function loginRequestOptions(username, password) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", contentType);

    let urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "password");
    urlencoded.append("username", username);
    urlencoded.append("password", password);
    urlencoded.append("client_id", process.env.REACT_APP_OAUTH2_CLIENT_ID);
    urlencoded.append("client_secret", process.env.REACT_APP_OAUTH2_CLIENT_SECRET);

    return {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'manual'
    };
}

function logout() {

}

function operator() {

}

export const oauthUserService = {
    loginRequestOptions,
    logout,
    operator
};