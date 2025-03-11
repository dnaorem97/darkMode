const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// News Route
app.get('/news', (req, res) => {
    return res.status(200).json([
        {
            "title": "Breaking News",
            "description": "Latest updates on global events.",
            "image": "https://images.hindustantimes.com/img/2022/12/04/550x309/Breaking-News-Live-Blog-pic_1626307942790_1670112143021_1670112143021.jpg",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            "title": "Tech Trends",
            "description": "Advancements in AI and Robotics.",
            "image": "https://www.simplilearn.com/ice9/free_resources_article_thumb/Technology_Trends.jpg",
            "content": "Artificial Intelligence is shaping the future."
        },
        {
            "title": "Sports Highlights",
            "description": "Recent sports updates from around the world.",
            "image": "https://d21zeai4l2a92w.cloudfront.net/wp-content/uploads/2022/09/iStock-1148035886-1536x1024.jpg",
            "content": "The latest scores and highlights from major leagues."
        },{
            "title": "Breaking News",
            "description": "Latest updates on global events.",
            "image": "https://images.hindustantimes.com/img/2022/12/04/550x309/Breaking-News-Live-Blog-pic_1626307942790_1670112143021_1670112143021.jpg",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            "title": "Tech Trends",
            "description": "Advancements in AI and Robotics.",
            "image": "https://www.simplilearn.com/ice9/free_resources_article_thumb/Technology_Trends.jpg",
            "content": "Artificial Intelligence is shaping the future."
        },
        {
            "title": "Sports Highlights",
            "description": "Recent sports updates from around the world.",
            "image": "https://d21zeai4l2a92w.cloudfront.net/wp-content/uploads/2022/09/iStock-1148035886-1536x1024.jpg",
            "content": "The latest scores and highlights from major leagues."
        }
    ]);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
