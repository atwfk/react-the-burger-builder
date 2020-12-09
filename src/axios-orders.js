import axios from "axios";
const instance = axios.create({
  baseURL: "https://the-burger-builder-2f2a3.firebaseio.com/",
});
export default instance;
