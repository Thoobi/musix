export const fetchUserInfo = async () => {
  const res = await fetch("https://api.deezer.com/user/2529");
  const data = await res.json();
  return data;
};

export const fetchUserPlaylists = async () => {
  const res = await fetch("https://api.deezer.com/user/2529/playlists");
  const data = await res.json();
  return data.data; // data is nested
};

// src/api/deezerApi.js
export const fetchAlbumById = async (albumId) => {
  try {
    const response = await fetch(`https://api.deezer.com/album/${albumId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching album:", error);
    return null;
  }
};
