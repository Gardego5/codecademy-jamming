const client_id = '6237df6cd3a84bd6967a03907b75660d';
const redirect_uri = 'http://localhost:3000/';

let userAccessToken;

export default Spotify = {
  getAccessToken() {
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (userAccessToken !== null) {
      return userAccessToken;
    } else if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];

      let expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else if (!accessTokenMatch && !expiresInMatch) {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    }
  }
}
