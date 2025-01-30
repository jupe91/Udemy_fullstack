import express from "express";  // Express library to create the server
import axios from "axios";  // Axios to make HTTP requests
import dotenv from 'dotenv';  // dotenv to load environment variables from the .env file

dotenv.config();  // Load environment variables from .env file

const app = express();  // Create an instance of the Express application
const port = 3000;  // Set the port number the server will listen on
const apiKey = process.env.OPENUV_API_KEY;  // Access the OpenUV API key from environment variables

app.use(express.json());  // Use Express middleware to parse JSON request bodies

// Define a route that listens to GET requests at "/uv"
app.get("/uv", async (req, res) => {
    try {
        const { lat, lng } = req.query;  // Get latitude and longitude from query parameters
        const response = await axios.get(  // Send GET request to the OpenUV API
            `https://api.openuv.io/api/v1/uv?lat=${lat}&lng=${lng}`,  // Construct the API URL with lat and lng
            {
                headers: {
                    "x-access-token": apiKey,  // Include the API key in the request header
                },
            }
        );
        res.json(response.data);  // Send the API response data as JSON back to the client
    } catch (error) {
        res.status(500).send("Failed to fetch UV data");
    }
});

app.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
});
