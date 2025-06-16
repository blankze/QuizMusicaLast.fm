const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const quizRoutes = require('./routes/quizRoutes');
const userRoutes = require('./routes/userRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB conectado!'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.use('/quiz', quizRoutes);
app.use('/users', userRoutes);
app.use('/leaderboard', leaderboardRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
