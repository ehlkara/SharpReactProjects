import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID R2-pi2iHTm54TW_dLLT2RtTiAqa1kF7YdYfVgppF2Sg",
    },
    params: {
      query: term,
    },
  });
  debugger;
  return response.data.results;
};

export default searchImages;