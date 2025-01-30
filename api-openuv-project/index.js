import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.json());

// Test route
app.get("/", async (req, res) => {
    try {
        res.send("Server is running!");
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });