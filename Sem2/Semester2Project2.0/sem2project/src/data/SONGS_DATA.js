const BASE_URL = "http://example.com/songs/";

/**
 * @effect generate a unique song path for each song.
 */
function getSongPath(songTitle) {
  const formattedTitle = songTitle.toLowerCase().replace(/\s+/g, "-");

  const path = `${BASE_URL}${formattedTitle}.mp3`;

  console.log(path);
  return path;
}

/**
 * @effect initialize an array named "Songs"
 * @abstract a song object have this kind of structure:
 * {
 *  id: int,
 *  title: string,
 *  cover: string,
 *  artist: list,
 * }
 */
let Songs = [
  {
    id: 1,
    title: "",
    artist: [],
  },
];

/**
 * @effect adding 'cover' attribute to each song
 */
Songs = Songs.map((song) => ({
  ...song,
  cover: "https://picsum.photos/200",
}));

/**
 * @effect adding 'path' attribute to each song
 */

Songs = Songs.map((song) => ({
  ...song,
  path: getSongPath(song.title),
}));

console.log(Songs);
export default Songs;
