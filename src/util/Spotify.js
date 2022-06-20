const clientID = '6237df6cd3a84bd6967a03907b75660d';
const redirectURI = 'http://localhost:3000/';

let userAccessToken = null;

const Spotify = {
  getAccessToken() {
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (userAccessToken !== null) {
      return userAccessToken;
    } else if (accessTokenMatch && expiresInMatch) {
      userAccessToken = accessTokenMatch[1];

      let expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => userAccessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return userAccessToken;
    } else if (!userAccessToken && !expiresInMatch) {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    }
  },
  search(term) {
    const endpoint = 'https://api.spotify.com/v1/search?type=track&q=';
    const accessToken = Spotify.getAccessToken();

    return fetch(endpoint + term, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      if(response.ok) {
        return response.json();
      }
    })
    .then(jsonResponse => {
      console.log(jsonResponse)
      if(!jsonResponse) {
        return [];
      } else {
        return jsonResponse.tracks.items.map(track => {
          return {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
          }
        });
      }
    })
  }
}

export default Spotify;