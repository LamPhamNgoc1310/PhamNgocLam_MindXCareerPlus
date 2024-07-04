const BASE_URL = "../../assets/songs-audio/";

/**
 * @effect generate a unique song path for each song.
 */
function getSongPath(songTitle) {
  const formattedTitle = songTitle.toLowerCase().trim().replace(/\s+/g, "-");

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
 *  artist: list,
 * }
 */
let Songs = [
  {
    id: 0,
    title: "Đợi ft Wean",
    artist: ["52Hz"],
  },
  {
    id: 1,
    title: "Glue song",
    artist: ["Beedabadoobee"],

  },
  {
    id: 2,
    title: "Haru haru",
    artist: ["BIG BANG"],
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
