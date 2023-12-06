import { SpotifyApi } from "@spotify/web-api-ts-sdk";

// SHARED VARIABLES
const client_id = String(process.env.SPOTIFY_CLIENT_ID);
const client_secret = String(process.env.SPOTIFY_CLIENT_SECRET);

const PLAYLIST_ID = `3uiwFOJYSULQBk43ubSOOw`;
const FIELDS = encodeURIComponent(
  "external_urls,images,name,tracks.items(track(name,uri,external_urls,duration_ms,artists(name,uri,external_urls),album(images,name)))",
);

// WITH SPOTIFY SDK
const api = SpotifyApi.withClientCredentials(client_id, client_secret);

export const getWorkflowPlaylist = async () => {
  const playlist = await api.playlists.getPlaylist(PLAYLIST_ID, "US", FIELDS);
  return playlist;
};

// WITHOUT SPOTIFY SDK (using fetch)
const basic = btoa(`${client_id}:${client_secret}`);
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}?fields=${FIELDS}`;

const getAccessToken = async () => {
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }),
    });
    if (response.ok) {
      const { access_token } = await response.json();
      return access_token;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Unable to get Spotify access token");
  }
};

export const getPlaylistInfo = async () => {
  const access_token = await getAccessToken();

  if (!access_token) return null;

  console.log("access token received");

  try {
    const response = await fetch(PLAYLIST_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    if (response.ok) {
      const playlist = await response.json();
      console.log("playlist found", { playlist });

      return playlist;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Unable to get Spotify playlist");
  }
};
