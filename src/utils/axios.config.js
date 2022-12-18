import axios from "axios";

let URL;
//  const url = `http://localhost:4000/`;

switch (process.env.REACT_APP_ENVIRONMENT) {
    case "DEVELOPMENT":
        URL="http://localhost:4000/";
    
    break
    
    case "PRODUCTION":
        URL="production.com";
        
        break;

    default:
        URL="http://localhost:4000/";
}
const instance = axios.create({
    // baseURL: "http://localhost:4000/",
    baseURL:URL
});

export default instance;