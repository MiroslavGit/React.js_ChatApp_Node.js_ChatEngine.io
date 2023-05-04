const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const response = await axios.put('https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "Private-Key": "97a5a5ea-4e63-4309-8ec1-5d1302a2bfc6" } }
        );
        return res.status(response.status).json(response.data);
    }
    catch (err) {
        if (err.response) {
            return res.status(err.response.status).json(err.response.data);
        } else {
            return res.status(500).json({ error: "Server error" });
        }
    };
});

app.listen(3001);