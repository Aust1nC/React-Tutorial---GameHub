import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1a15ceb71ffb4f60b2fb6fcda92a6989",
  },
});
