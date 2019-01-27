import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-97f37.firebaseio.com/"
});

export default instance;
