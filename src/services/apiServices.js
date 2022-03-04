import axios from "axios"; // Importing Axios 
export const apiServices = {
  setHeader() {
    axios.defaults.headers.common["content-type"] = "*"; // adding the content type as "*" 
  },

  async get(resources) {
    apiServices.setHeader(); // calling setHeader method to set the header to axios
    let response = await axios.get(resources);  // GET api call 
    return response.data; // Returning the Response of the api
  },
};
