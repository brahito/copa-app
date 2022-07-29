import axios from "axios";

const consumer = axios.create({
    baseURL: "https://cdn.contentful.com"
})

export default consumer;