import axios from "axios";

// base url to make requests to the movie database.
// saves us typing https://api.themoviedb.org every request
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
