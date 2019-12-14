import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 2524bfd3b431ece53fa9d845e495f80ec33604bd01c0e3ec56b792a2afc03d06"
  }
});
