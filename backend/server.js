const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

let cards = [
    { id: 1, title: "Créer le fichier server.js", status: "Done" },
    { id: 2, title: "Lancer le conteneur Kanban", status: "In Progress" }
];

app.get('/api/cards', (req, res) => {
    res.json(cards);
});

app.listen(PORT, () => {
    console.log(`🚀 API Kanban lancée sur le port ${PORT}`);
});